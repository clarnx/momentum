import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

import en from '../locales/en/home';
import es from '../locales/es/home';

const Home: NextPageWithLayout = () => {
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
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout pageTitle="Inicio">{page}</PrimaryLayout>;
};
