import { rem, em } from '@mantine/core';
import { useRouter } from 'next/router';
import { memo, ReactNode } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { SpotlightProvider as MantineSpotlightProvider } from '@mantine/spotlight';
import createActions from './actions';

type Props = {
  hasSession: boolean;
  children: ReactNode;
};

function SpotlightProvider(props: Props) {
  const { hasSession, children } = props;
  const router = useRouter();
  const actions = createActions(hasSession, router);
  const smallScreen = useMediaQuery(`(max-width: ${em(485)})`);

  return (
    <MantineSpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Search posts"
      shortcut={['mod + K']}
      highlightQuery
      transitionProps={{
        duration: 150,
        transition: {
          in: { transform: 'translateY(0)', opacity: 1 },
          out: { transform: `translateY(-${rem(20)})`, opacity: 0 },
          transitionProperty: 'transform, opacity',
        },
      }}
      limit={4}
      nothingFoundMessage="Nothing found..."
      style={{ maxWidth: smallScreen ? rem(350) : rem(600) }}
    >
      {children}
    </MantineSpotlightProvider>
  );
}

export default memo(SpotlightProvider);
