import meta from 'meta';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { memo, ReactNode } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import shouldIncludeNavbar from '@utils/layout';
import useStyles from './Layout.styles';

const Header = dynamic(() => import('./Header'));
const Navbar = dynamic(() => import('./Navbar'));

function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { classes, cx } = useStyles();
  const navbarCollapsed = useMediaQuery(`(max-width: ${meta.layout.navbar.breakpoint}px)`);
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

export default memo(Layout);
