import { memo } from 'react';
import { Group } from '@mantine/core';
import DeleteButton from './Delete';
import ClipboardButton from './Clipboard';
import { HelperButtonProps } from './types';

function HelperButtons(props: HelperButtonProps) {
  return (
    <Group position="center">
      <DeleteButton apiToken={props.apiToken} />
      <ClipboardButton apiToken={props.apiToken} />
    </Group>
  );
}

export default memo(HelperButtons);
