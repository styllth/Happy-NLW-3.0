/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';

import Input from '../../components/Forms/Input';
import LoginSidebar from '../../components/LoginSidebar';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../hooks/useAuth';
import { LoginCard, LoginContainer, LoginWrapper } from './styles';

// import '../../styles/pages/restrict.css';

// import '../../styles/partials/inputs.css';

// import '../../styles/components/login_formarea.css';

// import { FiArrowLeft } from 'react-icons/fi';

interface FormProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn, loading, user, signed } = useAuth();
  const history = useHistory();

  const handleLogin = async (uFormData: FormProps) => {
    const { email, password } = uFormData;
    console.log(uFormData);
  };

  return (
    <LoginContainer>
      <LoginSidebar />
      <LoginCard>
        <Form onSubmit={handleLogin} className="login-form">
          <div className="input-area">
            <Input label="E-mai" name="email" />
            <Input label="Senha" name="password" type="password" />

            <div className="help-area">
              <div className="remember-block">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Lembrar-me</label>
              </div>
              <Link to="/login/forgot">Esqueci minha senha</Link>
            </div>
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
