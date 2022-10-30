import { memo } from 'react';
import { NextLink } from '@mantine/next';
import { Menu, Center } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import { LinkItemProps } from './types';
import useStyles from './NavItem.styles';

function NestedItems({ link }: LinkItemProps) {
  const { classes } = useStyles();

  const menuItems = link.links?.map((value) => (
    <Menu.Item key={value.link} component={NextLink} href={value.link}>
      {value.label}
    </Menu.Item>
  ));

  return (
    <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
      <Menu.Target>
        <a href={link.link} className={classes.link}>
          <Center>
            <span className={classes.linkLabel}>{link.label}</span>
            <IconChevronDown size={12} />
          </Center>
        </a>
      </Menu.Target>
      <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    </Menu>
  );
}

export default memo(NestedItems);
