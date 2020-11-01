import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import OrphanageLocation from '../../components/Location';
import { ContentWrapper, EnterApp, Location, PageLanding } from './styles';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <ContentWrapper>
        <img src={logo} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <OrphanageLocation />
        </Location>

        <Link to="/orphanages-map">
          <EnterApp>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </EnterApp>
        </Link>
      </ContentWrapper>
    </PageLanding>
  );
};

export default Landing;
