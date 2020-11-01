import { on } from 'process';
import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer, MapConsumer } from 'react-leaflet';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import api from '@repo/axios';
import { Form } from '@unform/web';

import ImagesInput from '../../components/Forms/ImagesInput';
import Input from '../../components/Forms/Input';
import OptionInput from '../../components/Forms/OptionInput';
import TextArea from '../../components/Forms/Textarea';
import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';
import { PageCreateOrphanage, FormCreateOrphanage } from './styles';

const CreateOrphanages: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const history = useHistory();

  async function handleSubmit(uformData: {
    name: string;
    about: string;
    instructions: string;
    openingHours: string;
    openOnWeekends: string;
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

      Array.from(images).forEach(image => {
        data.append('images', image);
      });

      // salva as informações
      await api.post('orphanages', data);
      toast.success('Cadastro realizado com sucesso!');

      history.goBack();
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

              <MapContainer
                center={[-5.7388364, -39.6391184]}
                style={{ width: '100%', height: 280 }}
                zoom={13}
                // onclick={handleMapClick}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {position.latitude !== 0 && (
                  <Marker
                    interactive={false}
                    icon={mapIcon}
                    position={[position.latitude, position.longitude]}
                  />
                )}
                <MapConsumer>
                  {map => {
                    map.on('click', (ev: any) => {
                      const { lat, lng } = ev.latlng;
                      setPosition({
                        latitude: lat,
                        longitude: lng,
                      });
                    });
                    return null;
                  }}
                </MapConsumer>
              </MapContainer>

              <Input label="Nome" name="name" />

              <TextArea
                label="Sobre"
                name="about"
                info="Máximo de 300 caracteres"
                maxLength={300}
              />

              <ImagesInput name="images" label="Fotos" />
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
};

export default CreateOrphanages;
