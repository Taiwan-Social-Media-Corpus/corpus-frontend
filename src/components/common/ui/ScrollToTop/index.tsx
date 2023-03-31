import { memo } from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';
import { rem, Affix, ActionIcon, Transition } from '@mantine/core';

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            style={transitionStyles}
            size={35}
            color="blue"
            variant="filled"
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconArrowUp size={16} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
}

export default memo(ScrollToTop);
