import { em } from '@mantine/core';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import layoutConfig from '@config/layout';
import { useMediaQuery } from '@mantine/hooks';
import { memo, useMemo, ReactNode } from 'react';
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
  const navbarCollapsed = useMediaQuery(`(min-width: ${em(layoutConfig.navbar.breakpoint)})`);
  const shouldRenderNavbar = shouldIncludeNavbar(router.pathname) && navbarCollapsed;
  const navbar = useMemo(() => (shouldRenderNavbar ? <Navbar /> : null), [shouldRenderNavbar]);

  return (
    <div
      className={cx({
        [classes.withNavbar]: shouldRenderNavbar,
      })}
    >
      <Header />
      {navbar}
      <main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </main>
    </div>
  );
}

export default memo(NavigationLayout);
