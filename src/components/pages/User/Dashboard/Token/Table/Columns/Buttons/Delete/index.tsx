import { memo } from 'react';
import dynamic from 'next/dynamic';
import { ActionIcon } from '@mantine/core';
import { openModal } from '@mantine/modals';
import { IconTrash } from '@tabler/icons-react';
import { HelperButtonProps } from '../types';

const DeleteForm = dynamic(() => import('./Form'));

function DeleteButton(props: HelperButtonProps) {
  return (
    <ActionIcon
      variant="outline"
      color="red"
      onClick={() =>
        openModal({
          title: 'Delete API token',
          zIndex: 99999,
          overlayOpacity: 0.55,
          children: <DeleteForm apiToken={props.apiToken} />,
        })
      }
    >
      <IconTrash size={18} />
    </ActionIcon>
  );
}

export default memo(DeleteButton);
