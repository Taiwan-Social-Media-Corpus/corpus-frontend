import { memo } from 'react';
import { ActionIcon } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconClipboard, IconClipboardCheck } from '@tabler/icons';
import { HelperButtonProps } from '../types';

function ClipboardButton(props: HelperButtonProps) {
  const { apiToken } = props;
  const clipboard = useClipboard({ timeout: 1000 });

  if (clipboard.copied) {
    return (
      <ActionIcon variant="outline" color="teal">
        <IconClipboardCheck size={18} />
      </ActionIcon>
    );
  }

  return (
    <ActionIcon variant="outline" onClick={() => clipboard.copy(apiToken)}>
      <IconClipboard size={18} />
    </ActionIcon>
  );
}

export default memo(ClipboardButton);
