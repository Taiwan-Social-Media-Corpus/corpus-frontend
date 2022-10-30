import Head from 'next/head';
import type { AppProps } from 'next/app';
import { getCookie } from 'cookies-next';
import Header from '@components/UI/Header';
import { ColorScheme } from '@mantine/core';
import { GetServerSidePropsContext } from 'next';
import DarkThemeContext from '@contexts/DarkTheme';

function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps, colorScheme } = props;

  return (
    <>
      <Head>
        <title>Taiwan Social Media Corpus</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <DarkThemeContext colorScheme={colorScheme}>
        <Header />
        <Component {...pageProps} />
      </DarkThemeContext>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default App;
