import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
// import { useHistory } from "react-router-dom";

import mapMarkerImg from '../../assets/images/map-marker.svg';
import { AppSidebar } from './styles';

export default function Sidebar() {
  const router = useRouter();

  return (
    <AppSidebar>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={router.back}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </AppSidebar>
  );
}
