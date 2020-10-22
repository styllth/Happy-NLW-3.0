import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import logo from '../assets/images/logo.svg';
import OrphanageLocation from '../components/Location';
import {
  PageLanding, ContentWrapper, Location, EnterApp,
} from '../styles/pages/Landing';

const Landing: React.FC = () => (
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

      <Link href="/Orphanages/Map">
        <EnterApp>
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApp>
      </Link>
    </ContentWrapper>
  </PageLanding>
);

export default Landing;
