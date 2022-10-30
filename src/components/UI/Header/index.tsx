import { memo } from 'react';
import Link from 'next/link';
import { MantineLogo } from '@mantine/ds';
import { Header as MantineHeader, Group, Code } from '@mantine/core';
import Route from '@config/routes';
import Menu from './Menu';
import NavItems from './NavItem';
import useStyles from './Header.styles';
import HeaderControls from './Controls';
import ColorSchemeToggle from '../ColorSchemeToggle';
import corePackageJson from '../../../../package.json';

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
    <MantineHeader height={56} className={classes.header}>
      <div className={classes.inner}>
        <Menu />
        <Group>
          <MantineLogo size={28} />
          <Link
            href="https://github.com/Taiwan-Social-Media-Corpus/corpus-backend"
            className={classes.version}
          >
            <Code>v {corePackageJson.version}</Code>
          </Link>
        </Group>
        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            <NavItems links={links} />
          </Group>
          <HeaderControls />
          <ColorSchemeToggle />
        </Group>
      </div>
    </MantineHeader>
  );
}

export default memo(Header);
