import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    paddingTop: 115,

    [theme.fn.largerThan('sm')]: {
      height: '100vh',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
    },
  },

  description: {
    textAlign: 'center',
  },
}));

export default useStyles;