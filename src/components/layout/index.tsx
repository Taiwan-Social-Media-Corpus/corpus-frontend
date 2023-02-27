import Head from 'next/head';
import { PageControl } from 'types';
import { ReactNode } from 'react';
import { useUser } from '@contexts/User';
import Loader from '@components/common/ui/Loader';
import SpotlightProvider from '@contexts/Spotlight';
import ServerError from '../../pages/500';
import NavigationLayout from './Navigation';

type Props = { children: ReactNode } & Pick<PageControl, 'Layout'>;

function _Layout(props: Props) {
  const { children, Layout: CustomLayout } = props;
  const { user } = useUser();
  const hasSession = user.data.uid !== '';
  const component = CustomLayout !== undefined ? <CustomLayout>{children}</CustomLayout> : children;

  if (user.pending) return <Loader />;

  return (
    <SpotlightProvider hasSession={hasSession}>
      <NavigationLayout>{user.error ? <ServerError /> : component}</NavigationLayout>
    </SpotlightProvider>
  );
}

function Layout(props: Props) {
  return (
    <>
      <Head>
        <title>Taiwan Social Media Corpus</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <_Layout {...props} />
    </>
  );
}

export default Layout;
