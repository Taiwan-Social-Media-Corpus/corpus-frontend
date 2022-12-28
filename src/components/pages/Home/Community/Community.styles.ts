import meta from 'meta';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'box-shadow 100ms ease, transform 100ms ease, background-color 100ms ease',

    ...theme.fn.hover({
      boxShadow: theme.shadows.md,
      transform: theme.colorScheme === 'dark' ? 'none' : 'scale(1.01)',
    }),
  },

  description: {
    paddingBottom: theme.spacing.lg,
  },

  facebook: {
    backgroundColor: theme.fn.darken(meta.facebook.color, theme.colorScheme === 'dark' ? 0.25 : 0),
    color: theme.white,
    ...theme.fn.hover({
      backgroundColor: theme.fn.lighten(
        meta.facebook.color,
        theme.colorScheme === 'dark' ? -0.1 : 0.1
      ),
    }),
  },

  github: {
    backgroundColor: '#000',
    color: theme.white,
    ...theme.fn.hover({
      backgroundColor: theme.fn.lighten('#000', theme.colorScheme === 'dark' ? 0.05 : 0.1),
    }),
  },
}));

export default useStyles;
