import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useHistory, useParams } from 'react-router-dom';

import api from '@repo/axios';

import Loading from '../../components/Loading';
import Sidebar from '../../components/Sidebar';
import { useFetchSWR } from '../../hooks/useFetch';
import mapIcon from '../../utils/mapIcon';
import {
  PageOrphanage,
  OrphanageDetailsContent,
  OrphanageImages,
  MapBox,
  OpenDetails,
  ContactButton,
} from './styles';

interface iImages {
  id: string;
  url: string;
}

interface iOrphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: iImages[];
}

interface iOrphanageParams {
  id: string;
}
const OrphanageDetails: React.FC = () => {
  const params = useParams<iOrphanageParams>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { data } = useFetchSWR<iOrphanage>(`orphanages/${params.id}`);

  if (!data) return <Loading />;

  const orphanage = data;

  return (
    <PageOrphanage>
      <Sidebar />

      <main>
        <OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <OrphanageImages>
            {orphanage.images.map((image, index) => (
              <button
                key={image.id}
                className={activeImageIndex === index ? 'active' : ''}
                type="button"
                onClick={() => {
                  setActiveImageIndex(index);
                }}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </OrphanageImages>

          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapBox>
              <MapContainer
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </MapContainer>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapBox>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos
                  <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos
                  <br />
                  fim de semana
                </div>
              )}
            </OpenDetails>

            <ContactButton
              type="button"
              onClick={() => {
                alert('Mensagem Enviada');
              }}
            >
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </main>
    </PageOrphanage>
  );
};

export default OrphanageDetails;
