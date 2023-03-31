import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 0.5)`,
    fontWeight: 900,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('md')]: {
      fontSize: rem(22),
      marginTop: rem(40),
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20),
      marginTop: rem(40),
    },
  },
}));

export default useStyles;
