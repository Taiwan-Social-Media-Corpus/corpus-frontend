import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: 'var(--removed-scroll-width, 0px)',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[2]
    }`,
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
  },

  logo: {
    paddingRight: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    height: 60,
    paddingTop: 6,
    display: 'flex',
    alignItems: 'center',
  },

  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'all',
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
    marginTop: 5,

    [theme.fn.smallerThan(860)]: {
      display: 'none',
    },
  },
}));

export default useStyles;
