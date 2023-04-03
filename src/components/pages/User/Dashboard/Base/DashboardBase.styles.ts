import layoutConfig from '@config/layout';
import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  content: {
    paddingTop: rem(80),
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.colorScheme === 'dark' ? 'none' : theme.shadows.sm,
  },

  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    zIndex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    paddingRight: `calc(${theme.spacing.xl} * 2)`,

    [`@media (max-width: ${em(layoutConfig.mdx.breakpoint)})`]: {
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
    },

    [theme.fn.smallerThan('sm')]: {
      paddingLeft: `calc(${theme.spacing.xl} * 2.2)`,
      paddingRight: `calc(${theme.spacing.xl} * 2.2)`,
    },
  },

  container: {
    marginTop: rem(theme.spacing.xl),
    width: '100%',
    maxWidth: rem(layoutConfig.mdx.contentWidth + layoutConfig.mdx.tableOfContentsWidth),
    marginLeft: rem(theme.spacing.xl),
    marginRight: 'auto',

    [`@media (max-width: ${em(layoutConfig.mdx.breakpoint)})`]: {
      width: '100%',
      paddingRight: 0,
    },

    [theme.fn.smallerThan('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  title: {
    marginTop: `calc(${theme.spacing.xl} * 1.2)`,
    marginBottom: rem(theme.spacing.md),
    wordBreak: 'break-word',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(30),
    },
  },
}));

export default useStyles;
