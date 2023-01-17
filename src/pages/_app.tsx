import dynamic from 'next/dynamic';
import Layout from '@components/layout';
import { getCookie } from 'cookies-next';
import { AppPropsWithLayout } from 'types';
import { ColorScheme } from '@mantine/core';
import { UserProvider } from '@contexts/User';
import NextApp, { AppContext } from 'next/app';
import { ModalsProvider } from '@mantine/modals';
import withSwitch from '@components/common/auth';

const DarkThemeContext = dynamic(() => import('@contexts/DarkTheme'));

function App(props: AppPropsWithLayout & { colorScheme: ColorScheme }) {
  const { Component, pageProps, colorScheme } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const VerifiedComponent = withSwitch(Component);

  return (
    <UserProvider>
      <DarkThemeContext colorScheme={colorScheme}>
        <ModalsProvider>
          <Layout>{getLayout(<VerifiedComponent {...pageProps} />)}</Layout>
        </ModalsProvider>
      </DarkThemeContext>
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
