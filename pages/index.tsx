import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
// import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <div className="p-2 ">locasdl asdlkna jskdn akljsf na</div>
      <Image
        src="/time-cat.jpg"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      {/* <Search /> */}
      <CatCard {...mockCatCardProps.base} />
      <p>
        Google offered in:{' '}
        <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
          <a className="underline text-blue-600"> Français</a>
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
