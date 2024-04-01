import Layout from './app/layout';
import type { AppProps } from 'next/app';

import './app/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
