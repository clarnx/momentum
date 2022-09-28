import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
// import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return <div></div>;
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout pageTitle="Inicio">{page}</PrimaryLayout>;
};
