import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { useMemo, useState } from 'react';
import { AppPropsWithLayout } from 'types';
import { ColorScheme } from '@mantine/core';
import { UserProvider } from '@contexts/User';
import { GetServerSidePropsContext } from 'next';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Layout = dynamic(() => import('@components/layout/App'));
const DarkThemeContext = dynamic(() => import('@contexts/DarkTheme'));

function App(props: AppPropsWithLayout & { colorScheme: ColorScheme }) {
  const { Component, pageProps, colorScheme } = props;
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);

  const hydratedComponent = useMemo(
    () =>
      pageProps !== undefined ? (
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      ) : (
        <Component {...pageProps} />
      ),
    [pageProps]
  );

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

      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <DarkThemeContext colorScheme={colorScheme}>
            <Layout>{getLayout(hydratedComponent)}</Layout>
          </DarkThemeContext>
        </QueryClientProvider>
      </UserProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default App;
