import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    paddingTop: rem(150),
    height: '100vh',
  },

  container: {
    marginTop: rem(60),
    marginBottom: rem(100),
    fontWeight: 900,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [`@media (max-width: ${em(550)})`]: {
      marginTop: rem(60),
      marginBottom: rem(100),
    },

    [`@media (max-width: ${em(420)})`]: {
      marginTop: rem(90),
      marginBottom: rem(100),
    },

    [`@media (max-width: ${em(375)})`]: {
      marginTop: rem(50),
      marginBottom: rem(10),
    },

    [`@media (max-width: ${em(360)})`]: {
      marginTop: rem(50),
      marginBottom: rem(10),
    },

    [`@media (max-width: ${em(300)})`]: {
      marginTop: rem(50),
      marginBottom: rem(10),
    },
  },

  title: {
    textAlign: 'center',

    [theme.fn.smallerThan('md')]: {
      fontSize: rem(22),
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20),
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
