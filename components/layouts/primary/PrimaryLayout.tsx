import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  pageTitle?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  pageTitle = 'NextJs Fullstack App Template',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div {...divProps}>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
