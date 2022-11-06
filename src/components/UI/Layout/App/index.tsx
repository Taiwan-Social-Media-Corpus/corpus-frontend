import { memo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MantineLogo } from '@mantine/ds';
import { Header as MantineHeader, Group, Code } from '@mantine/core';
import Route from '@config/routes';
import useStyles from './Header.styles';
import corePackageJson from '../../../../../package.json';

const Menu = dynamic(() => import('./Menu'));
const NavItems = dynamic(() => import('./NavItem'));
const HeaderControls = dynamic(() => import('./Controls'));
const ColorSchemeToggle = dynamic(() => import('@components/UI/ColorSchemeToggle'));

const links = [
  {
    link: Route.CORPUS,
    label: 'Corpus',
  },
  {
    link: Route.ABOUT,
    label: 'About',
  },
  {
    link: Route.GUIDE,
    label: 'Guide',
  },
];

function Header() {
  const { classes } = useStyles();

  return (
    <MantineHeader height={60} className={classes.header}>
      <Menu />
      <Group>
        <div className={classes.logoWrapper}>
          <Link href="/" className={classes.logo} aria-label="Mantine">
            <MantineLogo size={28} />
          </Link>

          <Link
            href="https://github.com/Taiwan-Social-Media-Corpus/corpus-backend"
            className={classes.version}
          >
            <Code>v {corePackageJson.version}</Code>
          </Link>
        </div>
      </Group>
      <Group>
        <Group spacing={5} className={classes.links}>
          <NavItems links={links} />
        </Group>
        <HeaderControls />
        <ColorSchemeToggle />
      </Group>
    </MantineHeader>
  );
}

export default memo(Header);
