import User from '../models/User';

interface UserProps {
  id: number;
  name: string;
  email: string;
  password?: string;
}

export default {
  render(user: User): UserProps {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  },
  renderMany(users: User[]) {
    return users.map(user => this.render(user));
  },
};
