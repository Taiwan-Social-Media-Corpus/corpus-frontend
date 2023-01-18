import { memo } from 'react';
import dynamic from 'next/dynamic';
import { openModal } from '@mantine/modals';
import { Anchor, Paper, useMantineTheme } from '@mantine/core';

const SignUpForm = dynamic(() => import('@components/pages/User/SignUp/Form/Desktop'));

function AnchorDesktop() {
  const theme = useMantineTheme();

  return (
    <Anchor
      size="md"
      onClick={() =>
        openModal({
          title: 'Sign up',
          zIndex: 99999,
          overlayOpacity: 0.55,
          children: (
            <Paper
              p={0}
              style={{
                position: 'relative',
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
              }}
            >
              <SignUpForm isModal />
            </Paper>
          ),
        })
      }
    >
      Create account
    </Anchor>
  );
}

export default memo(AnchorDesktop);
