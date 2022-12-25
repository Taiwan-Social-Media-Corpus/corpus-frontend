import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 60,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 20,
      paddingBottom: 40,
    },
  },

  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },

  image: {
    width: 200,
    height: 200,
    [theme.fn.smallerThan('sm')]: {
      width: 100,
      height: 100,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export default useStyles;
