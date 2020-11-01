import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

import mapMarkerImg from '../../assets/images/map-marker.svg';
import { AppSidebar } from './styles';

const Sidebar: React.FC = () => {
  const history = useHistory();

  return (
    <AppSidebar>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={history.goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </AppSidebar>
  );
};

export default Sidebar;
