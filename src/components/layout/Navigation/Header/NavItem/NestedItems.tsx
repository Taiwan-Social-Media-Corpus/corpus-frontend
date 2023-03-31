import Link from 'next/link';
import { LinkItem } from 'types/link';
import { memo, useMemo } from 'react';
import { Menu, Center } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import useStyles from './NavItem.styles';

type Props = { link: LinkItem };

function NestedItems(props: Props) {
  const { link } = props;
  const { classes } = useStyles();

  const menuItems = useMemo(
    () =>
      link.links?.map((value) => (
        <Menu.Item key={value.link}>
          <Link href={value.link} prefetch>
            {value.label}
          </Link>
        </Menu.Item>
      )),
    [link.links]
  );

  return (
    <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }}>
      <Menu.Target>
        <Link href={link.link} className={classes.link} prefetch>
          <Center>
            <span className={classes.linkLabel}>{link.label}</span>
            <IconChevronDown size={12} />
          </Center>
        </Link>
      </Menu.Target>
      <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    </Menu>
  );
}

export default memo(NestedItems);
