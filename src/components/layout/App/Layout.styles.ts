import meta from 'meta';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  '@global': {
    '#nprogress': {
      zIndex: 100000,
    },
  },

  withNavbar: {
    paddingLeft: meta.layout.navbar.width,

    [`@media (max-width: ${meta.layout.navbar.breakpoint}px)`]: {
      paddingLeft: 0,
    },
  },

  main: {
    scrollMarginTop: meta.layout.header.height,
    flex: 1,
    paddingTop: meta.layout.header.height - theme.spacing.xl - 2,

    [`@media (max-width: ${meta.layout.navbar.breakpoint}px)`]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  content: {
    minHeight: 'calc(100vh - 280px)',
  },
}));

export default useStyles;
