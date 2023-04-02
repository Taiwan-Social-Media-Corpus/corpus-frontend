import { em } from '@mantine/core';
import { memo, useMemo } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import blocks from './Blocks';
import MobileAccountPage from './Mobile';
import DesktopAccountPage from './Desktop';

function AccountPage() {
  const shouldRenderDesktop = useMediaQuery(`(min-width: ${em(992)})`);

  const component = useMemo(
    () =>
      shouldRenderDesktop ? (
        <DesktopAccountPage blocks={blocks} />
      ) : (
        <MobileAccountPage blocks={blocks} />
      ),
    [shouldRenderDesktop, blocks]
  );

  return component;
}

export default memo(AccountPage);
