import Link from 'next/link';
import { Optional } from 'types';
import { User } from 'types/user';
import Route from '@config/routes';
import { memo, useMemo } from 'react';
import Avatar from '@components/common/ui/Avatar';
import { Menu, ActionIcon, Tooltip } from '@mantine/core';
import { IconLogout, IconSettings, IconApi } from '@tabler/icons';

type Props = Optional<Pick<User, 'firstName' | 'lastName'>, 'firstName' | 'lastName'>;
type MenuItemProps = Parameters<typeof Menu.Item<typeof Link | 'button'>>[0];

const menuItems: Array<MenuItemProps & { divider?: boolean }> = [
  {
    href: Route.dashboard.account,
    icon: <IconSettings size={14} stroke={1.5} />,
    children: 'Account settings',
    component: Link,
  },
  {
    href: Route.dashboard.token,
    icon: <IconApi size={14} stroke={1.5} />,
    children: 'API token',
    component: Link,
  },
  {
    divider: true,
  },
  {
    href: Route.logout,
    icon: <IconLogout size={14} stroke={1.5} />,
    children: 'Logout',
    component: Link,
  },
];

function UserMenu(props: Props) {
  const { firstName, lastName } = props;

  const dropdown = useMemo(
    () =>
      menuItems.map((item, index) => {
        const key = `${item.children}-${index}`;
        if (item.divider) return <Menu.Divider key={key} />;
        return <Menu.Item<typeof Link | 'button'> key={key} {...item} />;
      }),
    [menuItems]
  );

  return (
    <Menu withArrow width={200} position="bottom-end" shadow="md">
      <Menu.Target>
        <Tooltip label="Account">
          <ActionIcon ml={10} style={{ borderRadius: 500 }}>
            <Avatar firstName={firstName} lastName={lastName} skeletonHeight={30} />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
        {dropdown}
      </Menu.Dropdown>
    </Menu>
  );
}

export default memo(UserMenu);
