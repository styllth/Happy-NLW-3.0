import React, { createContext, useState, useEffect } from 'react';

import api from '@repo/axios';

interface User {
  id: number;
  name: string;
  email: string;
}
interface Authentication {
  user: User;
  token: string;
}

export interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(url: string, params: unknown): Promise<void>;
  signOut(): void;
}

interface LoginProps {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const localUser = localStorage.getItem('@RAuth:user');
      const token = localStorage.getItem('@RAuth:token');

      if (localUser && token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(JSON.parse(localUser));
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(url: string, params: LoginProps) {
    const { data } = await api.post<Authentication>(url, {
      email: params.email,
      password: params.password,
    });

    setTimeout(() => {
      setUser(data.user);
    }, 3000);

    // Set toke for all request
    api.defaults.headers.Authorization = `Token ${data.token}`;

    localStorage.setItem('@RAuth:user', JSON.stringify(data.user));
    localStorage.setItem('@RAuth:token', data.token);
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
