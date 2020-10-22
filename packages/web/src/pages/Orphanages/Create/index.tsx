/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRouter } from 'next/router';
import { useState, ChangeEvent } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { ToastContainer, toast } from 'react-toastify';

import { Form } from '@unform/web';

import ImagesInput from '../../../components/Forms/ImagesInput';
import Input from '../../../components/Forms/Input';
import OptionInput from '../../../components/Forms/OptionInput';
import TextArea from '../../../components/Forms/Textarea';
import Sidebar from '../../../components/Sidebar';
import api from '../../../services/api';
import { FormCreateOrphanage, PageCreateOrphanage } from '../../../styles/pages/OrphanageCreate';
import mapIcon from '../../../utils/mapIcon';

import 'react-toastify/dist/ReactToastify.css';

const mapToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function CreateOrphanage() {
  const router = useRouter();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const handleMapClick = (event: any) => {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  };

  async function handleSubmit(uformData:{
    name: string;
        about: string;
        instructions:string;
        openingHours:string;
        openOnWeekends:string;
        images: File[];
  }) {
    try {
      const { latitude, longitude } = position;

      const {
        name,
        about,
        instructions,
        openingHours,
        openOnWeekends,
        images,
      } = uformData;
      const data = new FormData();

      data.append('name', name);
      data.append('about', about);
      data.append('latitude', String(latitude));
      data.append('longitude', String(longitude));
      data.append('instructions', instructions);
      data.append('opening_hours', openingHours);
      data.append('open_on_weekends', String(openOnWeekends));

      Array.from(images).forEach((image) => {
        data.append('images', image);
      });

      // salva as informações
      await api.post('orphanages', data);
      toast.success('Cadastro realizado com sucesso!');

      // router.back();
    } catch (error) {
      console.log(error);

      toast.error('ocorreu um erro com os dados!');
    }
  }

  return (
    <PageCreateOrphanage>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
      />

      <Sidebar />

      <main>
        <FormCreateOrphanage>
          <Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Dados</legend>

              <Map
                center={[-5.7388364, -39.6391184]}
                style={{ width: '100%', height: 280 }}
                zoom={13}
                onclick={handleMapClick}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${mapToken}`}
                />

                {position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                ) }

              </Map>

              <Input label="Nome" name="name" />

              <TextArea
                label="Sobre"
                name="about"
                info="Máximo de 300 caracteres"
                maxLength={300}
              />

              <ImagesInput
                name="images"
                label="Fotos"
              />

            </fieldset>

            <fieldset>
              <legend>Visitação</legend>

              <TextArea label="Instruções" name="instructions" />

              <Input label="Horário de visitação" name="openingHours" />

              <OptionInput
                label="Atende fim de semana?"
                name="openOnWeekends"
              />
            </fieldset>

            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </Form>
        </FormCreateOrphanage>
      </main>
    </PageCreateOrphanage>
  );
}
