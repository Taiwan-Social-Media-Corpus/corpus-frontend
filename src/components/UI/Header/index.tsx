import { memo } from 'react';
import { MantineLogo } from '@mantine/ds';
import { Header as MantineHeader, Group } from '@mantine/core';
import Menu from './Menu';
import NavItems from './NavItem';
import useStyles from './Header.styles';
import HeaderControls from './Controls';
import ColorSchemeToggle from '../ColorSchemeToggle';

const links = [
  {
    link: '/corpus',
    label: 'Corpus',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/guide',
    label: 'Guide',
  },
];

function Header() {
  const { classes } = useStyles();

  return (
    <MantineHeader height={56} className={classes.header} mb={20}>
      <div className={classes.inner}>
        <Menu />
        <Group>
          <MantineLogo size={28} />
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
