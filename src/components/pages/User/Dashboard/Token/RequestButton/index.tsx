import { memo } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@mantine/core';
import { openModal } from '@mantine/modals';
import { IconClipboardCheck } from '@tabler/icons-react';

const RequestForm = dynamic(() => import('./Form'));

function RequestButton() {
  return (
    <Button
      leftIcon={<IconClipboardCheck size={18} />}
      mt={10}
      mb={20}
      onClick={() =>
        openModal({
          title: 'Apply for an API token',
          zIndex: 99999,
          overlayProps: {
            opacity: 0.55,
            blur: 3,
          },
          children: <RequestForm />,
        })
      }
    >
      申請 API token
    </Button>
  );
}

export default memo(RequestButton);
