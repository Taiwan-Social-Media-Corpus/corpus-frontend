import dynamic from 'next/dynamic';
import { Text } from '@mantine/core';
import { memo, useMemo } from 'react';
import { useMediaQuery } from '@mantine/hooks';

const AnchorMobile = dynamic(() => import('./Anchor/Mobile'));
const AnchorDesktop = dynamic(() => import('./Anchor/Desktop'));

function LoginCallout() {
  const mobileScreen = useMediaQuery('(max-width: 420px)');
  const anchor = useMemo(
    () => (mobileScreen ? <AnchorMobile /> : <AnchorDesktop />),
    [mobileScreen]
  );

  return (
    <Text size="md" align="center" mt={5}>
      Do not have an account? {anchor}
    </Text>
  );
}

export default memo(LoginCallout);
