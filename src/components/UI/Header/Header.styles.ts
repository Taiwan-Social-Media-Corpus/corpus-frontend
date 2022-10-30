import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  version: {
    ...theme.fn.focusStyles(),
    fontWeight: 700,
    textDecoration: 'none',
    marginTop: 2,

    [theme.fn.smallerThan(860)]: {
      display: 'none',
    },
  },
}));

export default useStyles;
