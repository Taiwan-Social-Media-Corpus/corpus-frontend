import { memo, useState } from 'react';
import SignUpForm from '@components/pages/User/SignUp/Form/Desktop';
import { Anchor, Modal, Paper, useMantineTheme } from '@mantine/core';

function AnchorDesktop() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        title="Sign up"
        onClose={() => setOpened(false)}
        overlayOpacity={0.55}
        zIndex={9999}
      >
        <Paper
          p={0}
          style={{
            position: 'relative',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          }}
        >
          <SignUpForm />
        </Paper>
      </Modal>

      <Anchor onClick={() => setOpened(true)} size="md">
        Create account
      </Anchor>
    </>
  );
}

export default memo(AnchorDesktop);
