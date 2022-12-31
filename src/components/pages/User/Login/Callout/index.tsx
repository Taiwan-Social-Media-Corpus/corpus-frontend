import { memo } from 'react';
import { Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import AnchorMobile from './Anchor/Mobile';
import AnchorDesktop from './Anchor/Desktop';

function LoginCallout() {
  const mobileScreen = useMediaQuery('(max-width: 420px)');
  const anchor = mobileScreen ? <AnchorMobile /> : <AnchorDesktop />;

  return (
    <Text size="md" align="center" mt={5}>
      Do not have an account? {anchor}
    </Text>
  );
}

export default memo(LoginCallout);
