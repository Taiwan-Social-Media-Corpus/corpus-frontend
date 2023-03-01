import { memo } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import blocks from './Blocks';
import MobileAccountPage from './Mobile';
import DesktopAccountPage from './Desktop';

function AccountPage() {
  const shouldRenderDesktop = useMediaQuery('(min-width: 992px)');

  if (shouldRenderDesktop) {
    return <DesktopAccountPage blocks={blocks} />;
  }

  return <MobileAccountPage blocks={blocks} />;
}

export default memo(AccountPage);
