import { memo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import corePackageJson from 'package.json';
import IconController from '@components/common/ui/Icons';
import { Header as MantineHeader, Group, Code } from '@mantine/core';
import links from '../links';
import useStyles from './Header.styles';

const Menu = dynamic(() => import('./Menu'));
const NavItems = dynamic(() => import('./NavItem'));
const HeaderControls = dynamic(() => import('./Controls'));
const ColorSchemeToggle = dynamic(() => import('@components/common/ui/ColorSchemeToggle'));

function Header() {
  const { classes } = useStyles();

  return (
    <MantineHeader height={60} className={classes.header}>
      <Menu />
      <Group>
        <div className={classes.logoWrapper}>
          <Link href="/" className={classes.logo} aria-label="Mantine">
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
        </div>
      </Group>
      <Group>
        <Group spacing={5} className={classes.links}>
          <NavItems links={links.header} />
        </Group>
        <HeaderControls />
        <ColorSchemeToggle />
      </Group>
    </MantineHeader>
  );
}

export default memo(Header);
