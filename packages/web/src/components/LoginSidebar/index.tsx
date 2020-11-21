import React from 'react';

import HappyLogo from '../../assets/images/happy-logo-big.svg';
import { LoginSidebar } from './styles';

const LoginSideBar: React.FC = () => {
  return (
    <LoginSidebar>
      <img src={HappyLogo} alt="Happy Logo" />
      <div>
        <span>Buscando felicidade em todo solo brasileiro.</span>
      </div>
    </LoginSidebar>
  );
};

export default LoginSideBar;
