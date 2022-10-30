import Link from 'next/link';
import { memo, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Menu as MantineMenu, Burger } from '@mantine/core';
import links from './links';
import useStyles from './Menu.styles';

function Menu() {
  const { classes } = useStyles();
  const { toggle } = useDisclosure(false)[1];
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <MantineMenu
      shadow="md"
      position="bottom"
      width="100%"
      offset={20}
      onOpen={() => setUserMenuOpened(true)}
      onClose={() => setUserMenuOpened(false)}
      classNames={classes}
    >
      <MantineMenu.Target>
        <Burger opened={userMenuOpened} onClick={toggle} className={classes.burger} size="sm" />
      </MantineMenu.Target>

      <MantineMenu.Dropdown>
        {links.map((value) => (
          <MantineMenu.Item
            key={value.label}
            component={Link}
            icon={value.icon}
            href={value.link}
            sx={{ display: value.display }}
          >
            {value.label}
          </MantineMenu.Item>
        ))}
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
}

export default memo(Menu);
