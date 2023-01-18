import { memo } from 'react';
import { Text, Group, GroupPosition } from '@mantine/core';

type Props = { position: GroupPosition; content: string };

function ColumnHeader(props: Props) {
  const { position, content } = props;

  return (
    <Group position={position}>
      <Text weight={500} size="md">
        {content}
      </Text>
    </Group>
  );
}

export default memo(ColumnHeader);
