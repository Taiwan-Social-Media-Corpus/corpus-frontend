import { memo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useUser } from '@contexts/User';
import corePackageJson from 'package.json';
import { useSpotlight } from '@mantine/spotlight';
import { createHeaderLinks } from '@config/routes';
import IconController from '@components/common/ui/Icons';
import SearchControl from '@components/common/ui/SearchControl';
import { Header as MantineHeader, Group, Code } from '@mantine/core';
import NavItems from './NavItem';
import useStyles from './Header.styles';
import HeaderControls from './Controls';
import { UserMenu } from './Controls/Icons';

const Menu = dynamic(() => import('./Menu'));
const ColorSchemeToggle = dynamic(() => import('@components/common/ui/ColorSchemeToggle'));

function Header() {
  const { classes } = useStyles();
  const { user } = useUser();
  const { uid, firstName, lastName, fullName, email } = user.data;
  const hasSession = uid !== '';
  const links = createHeaderLinks(hasSession);
  const spotlight = useSpotlight();

  return (
    <MantineHeader height={60} className={classes.header}>
      <Menu
        hasSession={hasSession}
        firstName={firstName}
        lastName={lastName}
        email={email}
        fullName={fullName}
      />
      <Group className={classes.logoWrapper}>
        <Link href="/" className={classes.logo}>
          <Group mb={10}>
            <IconController control="lopen" size={55} renderType="header" />
          </Group>
        </Link>

        <Link
          href="https://github.com/Taiwan-Social-Media-Corpus/corpus-backend"
          className={classes.version}
        >
          <Code>v {corePackageJson.version}</Code>
        </Link>
      </Group>
      <Group>
        <Group spacing={5} className={classes.links}>
          <NavItems links={links} />
        </Group>

        <SearchControl onClick={spotlight.openSpotlight} control="input" />
        {hasSession ? <UserMenu firstName={firstName} lastName={lastName} /> : null}
        <SearchControl onClick={spotlight.openSpotlight} control="icon" />
        <HeaderControls />
        <ColorSchemeToggle />
      </Group>
    </MantineHeader>
  );
}

export default memo(Header);
