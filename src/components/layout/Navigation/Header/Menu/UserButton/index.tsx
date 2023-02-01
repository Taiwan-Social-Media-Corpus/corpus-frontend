import { memo } from 'react';
import { Group, Text } from '@mantine/core';
import Avatar from '@components/common/ui/Avatar';
import { MenuProps } from '../types';

type Props = Omit<MenuProps, 'hasSession'>;

function UserButton(props: Props) {
  const { firstName, lastName, fullName, email } = props;

  return (
    <Group>
      <Avatar firstName={firstName} lastName={lastName} skeletonHeight={40} />
      <div>
        <Text weight={500}>{fullName}</Text>
        <Text size="xs" color="dimmed">
          {email}
        </Text>
      </div>
    </Group>
  );
}

export default memo(UserButton);
