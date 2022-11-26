import { memo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header as MantineHeader, Group, Code } from '@mantine/core';
import links from '../links';
import useStyles from './Header.styles';
import corePackageJson from '../../../../../package.json';

const Menu = dynamic(() => import('./Menu'));
const NavItems = dynamic(() => import('./NavItem'));
const HeaderControls = dynamic(() => import('./Controls'));
const ColorSchemeToggle = dynamic(() => import('@components/common/ColorSchemeToggle'));
const LopenIcon = dynamic(() =>
  import('@components/common/Icons/index').then((module) => module.LopenIcon)
);

function Header() {
  const { classes } = useStyles();

  return (
    <MantineHeader height={60} className={classes.header}>
      <Menu />
      <Group>
        <div className={classes.logoWrapper}>
          <Link href="/" className={classes.logo} aria-label="Mantine">
            <Group mb={10}>
              <LopenIcon size={55} type="header" />
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
