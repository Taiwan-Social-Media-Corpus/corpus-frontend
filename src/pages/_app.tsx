import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { AppPropsWithLayout } from 'types';
import { ColorScheme } from '@mantine/core';
import { GetServerSidePropsContext } from 'next';

const Layout = dynamic(() => import('@components/layout/App'));
const DarkThemeContext = dynamic(() => import('@contexts/DarkThemeContext'));

function App(props: AppPropsWithLayout & { colorScheme: ColorScheme }) {
  const { Component, pageProps, colorScheme } = props;
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Taiwan Social Media Corpus</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          rel="shortcut icon"
          href={`${router.basePath}/favicon.ico`}
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="shortcut icon"
          href={`${router.basePath}/favicon.svg`}
          type="image/svg+xml"
          sizes="any"
        />
      </Head>
      <DarkThemeContext colorScheme={colorScheme}>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </DarkThemeContext>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default App;
