import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { AppPropsWithLayout } from 'types';
import { ColorScheme } from '@mantine/core';
import { UserProvider } from '@contexts/User';
import { GetServerSidePropsContext } from 'next';
import withSwitch from '@components/common/auth';

const DarkThemeContext = dynamic(() => import('@contexts/DarkTheme'));
const NavigationLayout = dynamic(() => import('@components/layout/Navigation'));

function App(props: AppPropsWithLayout & { colorScheme: ColorScheme }) {
  const { Component, pageProps, colorScheme } = props;
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);
  const VerifiedComponent = withSwitch(Component);

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
        <DarkThemeContext colorScheme={colorScheme}>
          <NavigationLayout>{getLayout(<VerifiedComponent {...pageProps} />)}</NavigationLayout>
        </DarkThemeContext>
      </UserProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default App;
