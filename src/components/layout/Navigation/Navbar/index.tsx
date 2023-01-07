import Link from 'next/link';
import Route from '@config/routes';
import { memo, useMemo } from 'react';
import { useRouter } from 'next/router';
import { IconLogout } from '@tabler/icons';
import { Navbar as MantineNavbar } from '@mantine/core';
import LinksGroup from './LinksGroup';
import { navbarLinks } from '../links';
import useStyles from './Navbar.styles';

function Navbar() {
  const { pathname } = useRouter();
  const { classes } = useStyles();
  const route = pathname.replace(/^\/([^/]*).*$/, '$1');
  const links = navbarLinks[route as keyof typeof navbarLinks];
  const isDashboardRoute = pathname.startsWith(Route.dashboard.root);

  const logout = useMemo(
    () =>
      isDashboardRoute ? (
        <MantineNavbar.Section className={classes.footer} p={20}>
          <Link href={Route.logout} className={classes.logoutLink}>
            <IconLogout className={classes.logoutIcon} stroke={1.5} />
            <span>Logout</span>
          </Link>
        </MantineNavbar.Section>
      ) : null,
    [isDashboardRoute]
  );

  const linkItems = useMemo(
    () =>
      links.map((link, index) => (
        <LinksGroup
          key={`${link.link}-${index}`}
          link={link.link}
          color={link.color}
          icon={<link.icon size={18} stroke={2.2} />}
          links={link.links}
        >
          {link.label}
        </LinksGroup>
      )),
    [links]
  );

  return (
    <MantineNavbar className={classes.navbar}>
      <MantineNavbar.Section className={classes.mainSection} grow>
        {linkItems}
      </MantineNavbar.Section>
      {logout}
    </MantineNavbar>
  );
}

export default memo(Navbar);
