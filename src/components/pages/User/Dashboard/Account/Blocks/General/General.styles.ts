import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 0.5,
    fontWeight: 900,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    [theme.fn.smallerThan('md')]: {
      fontSize: 22,
      marginTop: 40,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 20,
      marginTop: 40,
    },
  },
}));

export default useStyles;
