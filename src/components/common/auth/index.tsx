import Route from '@config/routes';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import { NextPageWithAuth } from 'types';
import { Redirect, getRedirectURL } from '@utils/url/redirect';

const withSwitch = (Component: NextPageWithAuth) => {
  const Switch = (props: any) => {
    const { user } = useUser();
    const router = useRouter();
    const currentPath = router.pathname;
    const isAuth = Component?.auth;
    const hasSession = user?.data.uid;
    const enabled = user?.data.enabled;

    if (!hasSession) {
      if (isAuth) {
        return <Redirect url={Route.login} />;
      }
      return <Component {...props} />;
    }

    if (!enabled) {
      const permittedRoutes: string[] = [Route.home, Route.logout, Route.activation];
      const noNeedToRedirects: string[] = [
        Route.login,
        Route.signUp,
        Route.notFound,
        Route.serverError,
      ];

      const from = noNeedToRedirects.includes(currentPath) ? undefined : currentPath;
      if (currentPath !== Route.activation && !permittedRoutes.includes(currentPath)) {
        return <Redirect url={Route.activation} from={from} />;
      }

      return <Component {...props} />;
    }

    const excludedRoutes: string[] = [
      Route.activation,
      Route.login,
      Route.signUp,
      Route.recovery.root,
    ];

    if (excludedRoutes.some((value) => router.asPath.includes(value))) return <Redirect url="/" />;

    const redirect = getRedirectURL(`${Route.activation}?redirect`, router.asPath);
    if (redirect !== null) return <Redirect url={redirect} />;

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Switch.getInitialProps = Component.getInitialProps;
  }

  return Switch;
};

export default withSwitch;
