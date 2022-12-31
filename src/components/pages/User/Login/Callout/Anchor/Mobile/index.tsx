import { memo } from 'react';
import Link from 'next/link';
import Route from '@config/routes';
import { Anchor } from '@mantine/core';

function AnchorMobile() {
  return (
    <Anchor component={Link} href={Route.signUp} size="md">
      Create account
    </Anchor>
  );
}

export default memo(AnchorMobile);
