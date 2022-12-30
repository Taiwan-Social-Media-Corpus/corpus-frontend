import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    paddingTop: 90,
    height: '96vh',
  },

  container: {
    marginTop: 60,
    marginBottom: 100,
    fontWeight: 900,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    [`@media (max-width: ${550}px)`]: {
      marginTop: 60,
      marginBottom: 100,
    },
    [`@media (max-width: ${420}px)`]: {
      marginTop: 90,
      marginBottom: 100,
    },
    [`@media (max-width: ${375}px)`]: {
      marginTop: 50,
      marginBottom: 10,
    },
    [`@media (max-width: ${360}px)`]: {
      marginTop: 50,
      marginBottom: 10,
    },
    [`@media (max-width: ${300}px)`]: {
      marginTop: 50,
      marginBottom: 10,
    },
  },

  title: {
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      fontSize: 22,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 20,
    },
  },

  subTitle: {
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      fontSize: 16,
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: 14,
    },
  },
}));

export default useStyles;
