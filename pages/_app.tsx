import { ThemeProvider } from '@material-tailwind/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

import { Auth0Provider } from '@auth0/auth0-react';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  // const onRedirectCallback = (appState?: any) => {
  //   // Use Next.js's Router.replace method to replace the url
  //   Router.replace(appState?.returnTo || '/');
  // };
  return (
    <Auth0Provider
      //@ts-ignore
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      //@ts-ignore
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}
    >
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </Auth0Provider>
  );
}

export default MyApp;
