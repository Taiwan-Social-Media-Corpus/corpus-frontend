import dynamic from 'next/dynamic';
import { getCookie } from 'cookies-next';
import { AppPropsWithControl } from 'types';
import { ColorScheme } from '@mantine/core';
import { UserProvider } from '@contexts/User';
import NextApp, { AppContext } from 'next/app';
import MantineProvider from '@contexts/Mantine';
import withSwitch from '@components/common/auth';

const Layout = dynamic(() => import('@components/layout'));

function App(props: AppPropsWithControl & { colorScheme: ColorScheme }) {
  const { Component, pageProps, colorScheme } = props;
  const VerifiedComponent = withSwitch(Component);

  return (
    <UserProvider>
      <MantineProvider colorScheme={colorScheme}>
        <Layout {...Component.control}>
          <VerifiedComponent {...pageProps} />
        </Layout>
      </MantineProvider>
    </UserProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'light',
  };
};

export default App;
