import { useRouter } from 'next/router';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

import en from '../../locales/en/about';
import es from '../../locales/es/about';

const AboutPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : es;

  return <div>{t.title}</div>;
};

export default AboutPage;

AboutPage.getLayout = (page) => {
  return <PrimaryLayout pageTitle="About">{page}</PrimaryLayout>;
};
