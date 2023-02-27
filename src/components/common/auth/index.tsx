import Route from '@config/routes';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import Redirect from '@utils/url/redirect';
import { NextPageWithControl } from 'types';

const withSwitch = (Component: NextPageWithControl) => {
  const Switch: NextPageWithControl = (props: any) => {
    const { user } = useUser();
    const { pathname, asPath } = useRouter();
    const isAuth = Component.control?.auth;
    const { uid: hasSession, enabled } = user.data;
    const query = new URLSearchParams(asPath.split('?')?.[1]);
    const nextUrl = query.get('next');

    if (!hasSession) {
      if (isAuth) {
        const next = pathname !== Route.logout ? asPath : undefined;
        return <Redirect url={{ pathname: Route.login, query: next ? { next } : undefined }} />;
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

      const from = noNeedToRedirects.includes(pathname) ? undefined : pathname;

      if (pathname !== Route.activation && !permittedRoutes.includes(pathname)) {
        return (
          <Redirect
            url={{
              pathname: Route.activation,
              query: nextUrl || from ? { next: nextUrl || from } : undefined,
            }}
          />
        );
      }
      return <Component {...props} />;
    }

    const excludedRoutes: string[] = [
      Route.activation,
      Route.login,
      Route.signUp,
      Route.recovery.root,
    ];

    if (excludedRoutes.some((value) => asPath.includes(value))) {
      if (nextUrl) return <Redirect url={nextUrl} />;
      return <Redirect url={Route.dashboard.account} />;
    }

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Switch.getInitialProps = Component.getInitialProps;
  }

  Switch.control = Component.control;
  return Switch;
};

export default withSwitch;
