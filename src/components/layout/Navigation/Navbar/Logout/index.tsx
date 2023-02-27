import { memo } from 'react';
import Link from 'next/link';
import Route from '@config/routes';
import { Navbar } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import useStyles from './LogoutSection.styles';

function LogoutSection() {
  const { classes } = useStyles();

  return (
    <Navbar.Section className={classes.footer} p={20}>
      <Link href={Route.logout} className={classes.logoutLink}>
        <IconLogout className={classes.logoutIcon} stroke={1.5} />
        <span>Logout</span>
      </Link>
    </Navbar.Section>
  );
}

export default memo(LogoutSection);
