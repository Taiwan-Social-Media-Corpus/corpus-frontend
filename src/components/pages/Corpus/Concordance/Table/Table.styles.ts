import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },

  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    zIndex: 2,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
    zIndex: 100,
  },
}));

export default useStyles;
