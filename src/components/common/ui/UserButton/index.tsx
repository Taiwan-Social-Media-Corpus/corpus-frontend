import Link from 'next/link';
import { User } from 'types/user';
import { useState, useMemo } from 'react';
import { navbarLinks } from '@config/routes';
import { IconChevronRight } from '@tabler/icons-react';
import { UnstyledButton, UnstyledButtonProps, Group, Text, Collapse, Menu } from '@mantine/core';
import Avatar from '../Avatar';
import useStyles from './UserButton.styles';

type UserProps = Pick<User, 'lastName' | 'firstName' | 'email'> & {
  fullName: string;
  shouldCollapse?: boolean;
};
type Props = Partial<UserProps> & UnstyledButtonProps;

function UserButton(props: Props) {
  const { firstName, lastName, fullName, email, shouldCollapse, ...buttonProps } = props;
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const { dashboard: dashboardLinks } = navbarLinks;
  const handleClick = shouldCollapse ? () => setOpened((o) => !o) : undefined;

  const collapse = useMemo(
    () =>
      shouldCollapse ? (
        <Collapse in={opened}>
          {dashboardLinks.map((value, index) => (
            <Text className={classes.link} key={`${value.label}-${index}`}>
              <Menu.Item
                component={Link}
                href={value.link!}
                icon={<value.icon size={14} stroke={1.5} />}
              >
                {value.label}
              </Menu.Item>
            </Text>
          ))}
        </Collapse>
      ) : null,
    [shouldCollapse, opened]
  );

  return (
    <>
      <UnstyledButton onClick={handleClick} className={classes.user} {...buttonProps}>
        <Group>
          <Avatar firstName={firstName} lastName={lastName} skeletonHeight={40} />
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {fullName}
            </Text>
            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>
          <IconChevronRight
            className={classes.chevron}
            size={14}
            stroke={1.5}
            style={{
              transform: opened ? 'rotate(90deg)' : 'none',
            }}
          />
        </Group>
      </UnstyledButton>
      {collapse}
    </>
  );
}

export default UserButton;
