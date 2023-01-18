import { memo } from 'react';
import { IconTrash } from '@tabler/icons';
import { ActionIcon } from '@mantine/core';
import { openModal, closeAllModals } from '@mantine/modals';
import DeleteForm from './Form';
import { HelperButtonProps } from '../types';

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
          children: <DeleteForm apiToken={props.apiToken} handleClose={closeAllModals} />,
        })
      }
    >
      <IconTrash size={18} />
    </ActionIcon>
  );
}

export default memo(DeleteButton);
