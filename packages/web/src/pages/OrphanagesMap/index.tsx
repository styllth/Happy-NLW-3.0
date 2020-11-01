import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';

import logo from '../../assets/images/logo.svg';
import mapMarker from '../../assets/images/map-marker.svg';
import Location from '../../components/Location';
import { useFetchSWR } from '../../hooks/useFetch';
import mapIcon from '../../utils/mapIcon';
import { PageMap, CreateOrphanage } from './styles';

import 'dotenv/config';
import Loading from '../../components/Loading';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

// eslint-disable-next-line no-unused-vars
// const mapStyles = ['streets-v11', 'outdoors-v11', 'light-v10', 'dark-v10', 'satellite-v9', 'satellite-streets-v11'];

const OrphanagesMap: React.FC = () => {
  const { data } = useFetchSWR<Orphanage[]>('/orphanages');

  if (!data) return <Loading />;

  return (
    <PageMap>
      <aside>
        <header>
          <Link to="/">
            <img src={logo} alt="Happy" />
          </Link>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <Location />
        </footer>
      </aside>

      <MapContainer
        center={[-5.7413576, -39.6301822]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_PUBLIC_MAPBOX_TOKEN}`}
        />

        {data.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`orphanages-details/${orphanage.id}`}>
                <FiArrowRight size={26} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <Link to="/orphanages-create">
        <CreateOrphanage>
          <FiPlus size={32} color="#FFF" />
        </CreateOrphanage>
      </Link>
    </PageMap>
  );
};
export default OrphanagesMap;
