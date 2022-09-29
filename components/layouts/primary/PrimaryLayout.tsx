import Head from 'next/head';
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
        <Header className="" />
        <main className="app-containter">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PrimaryLayout;
