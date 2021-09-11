import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next-Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is a demo Next.js app styled with Tailwind CSS"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
