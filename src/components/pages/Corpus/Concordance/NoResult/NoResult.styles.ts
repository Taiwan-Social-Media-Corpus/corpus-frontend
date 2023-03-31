import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(60),
    paddingBottom: rem(60),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(20),
      paddingBottom: rem(40),
    },
  },

  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },

  image: {
    width: rem(200),
    height: rem(200),

    [theme.fn.smallerThan('sm')]: {
      width: rem(100),
      height: rem(100),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export default useStyles;
