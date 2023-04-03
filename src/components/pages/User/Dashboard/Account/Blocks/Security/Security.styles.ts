import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(380),

    [`@media (max-width: ${em(990)})`]: {
      minHeight: rem(340),
    },

    [`@media (max-width: ${em(800)})`]: {
      minHeight: rem(250),
    },

    [`@media (max-width: ${em(768)})`]: {
      minHeight: rem(300),
    },

    [`@media (max-width: ${em(650)})`]: {
      minHeight: rem(430),
    },

    [`@media (max-width: ${em(370)})`]: {
      minHeight: rem(385),
    },
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
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

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default useStyles;
