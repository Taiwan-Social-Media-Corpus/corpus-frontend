import { memo } from 'react';
import { User } from 'types/user';
import { IconChevronRight } from '@tabler/icons-react';
import { UnstyledButton, UnstyledButtonProps, Group, Text } from '@mantine/core';
import Avatar from '../Avatar';
import useStyles from './UserButton.styles';

type UserProps = Pick<User, 'lastName' | 'firstName' | 'email'> & { fullName: string };
type Props = Partial<UserProps> & UnstyledButtonProps;

function UserButton(props: Props) {
  const { firstName, lastName, fullName, email, ...buttonProps } = props;
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...buttonProps}>
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
        <IconChevronRight size={14} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}

export default memo(UserButton);
