import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import { getRouteFromPathname } from '@utils';
import { memo, useState, useMemo } from 'react';
import { useSpotlight } from '@mantine/spotlight';
import Route, { navbarLinks } from '@config/routes';
import { Navbar as MantineNavbar } from '@mantine/core';
import UserButton from '@components/common/ui/UserButton';
import SearchControl from '@components/common/ui/SearchControl';
import LogoutSection from './Logout';
import LinksGroup from './LinksGroup';
import useStyles from './Navbar.styles';

function Navbar() {
  const { classes } = useStyles();
  const { user } = useUser();
  const { uid, firstName, lastName, fullName, email } = user.data;
  const hasSession = uid !== '';
  const spotlight = useSpotlight();
  const router = useRouter();
  const route = getRouteFromPathname(router.pathname);
  const links = navbarLinks[route as keyof typeof navbarLinks];
  const isDashboardRoute = router.pathname.startsWith(Route.dashboard.root);
  const [active, setActive] = useState(router.asPath.split('/')[2].split('?')[0]);

  const userButton = useMemo(
    () =>
      !isDashboardRoute && hasSession ? (
        <MantineNavbar.Section
          className={classes.userSection}
          onClick={() => router.push(Route.dashboard.account)}
        >
          <UserButton
            firstName={firstName}
            lastName={lastName}
            fullName={fullName}
            email={email}
            p="md"
          />
        </MantineNavbar.Section>
      ) : null,
    [hasSession, isDashboardRoute, user.data, hasSession]
  );

  const linkItems = useMemo(
    () =>
      links.map((link, index) => (
        <LinksGroup
          key={`${link.label}-${index}`}
          {...link}
          active={active}
          setActive={setActive}
        />
      )),
    [links, active]
  );

  return (
    <MantineNavbar className={classes.navbar}>
      {userButton}
      <MantineNavbar.Section grow className={classes.section}>
        <SearchControl
          control="input"
          mb={20}
          mt={hasSession && isDashboardRoute ? 70 : hasSession ? undefined : 70}
          sx={{ width: '100%' }}
          onClick={spotlight.openSpotlight}
        />
        {linkItems}
      </MantineNavbar.Section>
      {isDashboardRoute ? <LogoutSection /> : null}
    </MantineNavbar>
  );
}

export default memo(Navbar);
