import Route from '@config/routes';
import { memo, ReactNode } from 'react';
import { useRouter } from 'next/router';
import layoutConfig from '@config/layout';
import { useMediaQuery } from '@mantine/hooks';
import Navbar from './Navbar';
import Header from './Header';
import useStyles from './NavigationLayout.styles';

function shouldIncludeNavbar(path: string) {
  const includeNavbarPaths = [Route.about.root, Route.guide, Route.dashboard.root];
  return includeNavbarPaths.some((route) => path.startsWith(route));
}

function NavigationLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { classes, cx } = useStyles();
  const navbarCollapsed = useMediaQuery(`(max-width: ${layoutConfig.navbar.breakpoint}px)`);
  const shouldRenderNavbar = shouldIncludeNavbar(router.pathname) || navbarCollapsed;

  return (
    <div
      className={cx({
        [classes.withNavbar]: shouldRenderNavbar,
      })}
    >
      <Header />
      {shouldRenderNavbar ? <Navbar /> : null}
      <main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </main>
    </div>
  );
}

export default memo(NavigationLayout);
