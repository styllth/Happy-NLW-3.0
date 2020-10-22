import Link from 'next/link';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarker from '../../../assets/images/map-marker.svg';
import Location from '../../../components/Location';
import { useFetchSWR } from '../../../hooks/useFetch';
import { CreateOrphanage, PageMap } from '../../../styles/pages/OrphanagesMap';
import mapIcon from '../../../utils/mapIcon';

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

  if (!data) return (<div>Carregando...</div>);

  return (
    <PageMap>
      <aside>
        <header>
          <Link href="/">
            <img src={mapMarker} alt="Happy" />
          </Link>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <Location />
        </footer>
      </aside>

      <Map
        center={[-5.7388364, -39.6391184]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
        />

        {data.map((orphanage) => (
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
              <Link href={`Details/${orphanage.id}`}>
                <FiArrowRight size={26} color="#FFF" />
              </Link>
            </Popup>

          </Marker>
        ))}
      </Map>

      <Link href="/Orphanages/Create">
        <CreateOrphanage>
          <FiPlus size={32} color="#FFF" />
        </CreateOrphanage>
      </Link>
    </PageMap>
  );
};
export default OrphanagesMap;
