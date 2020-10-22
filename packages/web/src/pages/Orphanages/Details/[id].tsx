import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';

import Sidebar from '../../../components/Sidebar';
import { useFetchSWR } from '../../../hooks/useFetch';
import {
  ContactButton,
  MapContainer,
  OpenDetails,
  OrphanageDetails, OrphanageDetailsContent, OrphanageImages, PageOrphanage,
} from '../../../styles/pages/OrphanageDetails';
import mapIcon from '../../../utils/mapIcon';

interface iOrphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: string;
    url: string;
  }>;
}

const Orphanage:React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useFetchSWR<iOrphanage>(`/orphanages/${id}`);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!data) {
    return <p>Carregando...</p>;
  }

  const orphanage = data;

  return (
    <PageOrphanage>

      <Sidebar />

      <main>
        <OrphanageDetails>
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

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

            <MapContainer>
              <Map
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
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta
                {' '}
                <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends
                ? (
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#39CC83" />
                    Atendemos
                    <br />
                    fim de semana
                  </div>
                )
                : (
                  <div className="open-on-weekends dont-open">
                    <FiInfo size={32} color="#FF669D" />
                    Não atendemos
                    <br />
                    fim de semana
                  </div>
                )}

            </OpenDetails>

            <ContactButton type="button" onClick={() => { alert('Mensagem Enviada'); }}>
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>

          </OrphanageDetailsContent>
        </OrphanageDetails>
      </main>
    </PageOrphanage>
  );
};

export default Orphanage;
