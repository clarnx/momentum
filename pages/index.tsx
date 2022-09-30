import { useAuth0 } from '@auth0/auth0-react';
import { NextPageWithLayout } from './page';

import { useRouter } from 'next/router';
import LoginButton from '../components/buttons/login/LoginButton';
import LogoutButton from '../components/buttons/logout/LogoutButton';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import en from '../locales/en/home';
import es from '../locales/es/home';

interface IHome {
  locale: string;
}

const Home: NextPageWithLayout<IHome> = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log({ user, isAuthenticated, isLoading });

  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : es;
  return (
    <div>
      <h1>{t.title}</h1>
      <small>{t.subtitle}</small>
      <div>
        <h1>{t.welcome} Usuario!</h1>
        <p>{t.description}</p>
        <button>{t.button}</button>
      </div>
      <div>{t.cookies}</div>

      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout pageTitle="Inicio">{page}</PrimaryLayout>;
};

// export const getStaticProps: GetStaticProps = ({ locale }) => {
//   return {
//     props: {
//       locale,
//     },
//   };
// };
