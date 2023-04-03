import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useDisclosure } from '@mantine/hooks';
import { memo, useState, useMemo } from 'react';
import { createMenuLinks } from '@config/routes';
import { Burger, Menu as MantineMenu } from '@mantine/core';
import { MenuProps } from './types';
import useStyles from './Menu.styles';

const UserButton = dynamic(() => import('@components/common/ui/UserButton'));
const CollapseMenuItem = dynamic(() => import('./Collapse'));

function Menu(props: MenuProps) {
  const { hasSession, firstName, lastName, fullName, email } = props;
  const { classes } = useStyles();
  const { toggle } = useDisclosure(false)[1];
  const [menuOpened, setMenuOpened] = useState(false);
  const links = createMenuLinks(hasSession);

  const items = useMemo(
    () =>
      links.map((link, index) => {
        if (link.links !== undefined) {
          return (
            <CollapseMenuItem
              key={`${link.label}-${index}`}
              label={link.label}
              icon={<link.icon size={14} stroke={1.5} />}
              links={link.links}
            />
          );
        }

        return (
          <MantineMenu.Item
            key={`${link.label}-${index}`}
            component={Link}
            href={link.link!}
            icon={<link.icon size={14} stroke={1.5} />}
          >
            {link.label}
          </MantineMenu.Item>
        );
      }),
    [links]
  );

  const userButton = useMemo(
    () =>
      hasSession ? (
        <>
          <UserButton
            firstName={firstName}
            lastName={lastName}
            fullName={fullName}
            email={email}
            p={10}
            shouldCollapse
          />
          <MantineMenu.Divider />
        </>
      ) : null,
    [hasSession]
  );

  return (
    <MantineMenu
      shadow="md"
      position="bottom"
      width="100%"
      offset={15}
      onOpen={() => setMenuOpened(true)}
      onClose={() => setMenuOpened(false)}
      classNames={classes}
    >
      <MantineMenu.Target>
        <Burger opened={menuOpened} onClick={toggle} className={classes.burger} size="sm" />
      </MantineMenu.Target>

      <MantineMenu.Dropdown>
        {userButton}
        {items}
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
}

export default memo(Menu);
