import layoutConfig from '@config/layout';
import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  content: {
    paddingTop: rem(80),
    minHeight: `calc(100vh - ${rem(350)})`,
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
    paddingRight: `calc(${theme.spacing.xl} * 2`,

    [`@media (max-width: ${rem(layoutConfig.mdx.breakpoint)})`]: {
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
    },
  },

  container: {
    marginTop: theme.spacing.xl,
    width: '100%',
    maxWidth: rem(layoutConfig.mdx.contentWidth + layoutConfig.mdx.tableOfContentsWidth),
    marginLeft: theme.spacing.xl,
    marginRight: 'auto',

    [`@media (max-width: ${rem(layoutConfig.mdx.breakpoint)})`]: {
      width: '100%',
      paddingRight: 0,
    },
  },

  title: {
    marginTop: `calc(${theme.spacing.xl} * 1.2)`,
    marginBottom: theme.spacing.md,
    wordBreak: 'break-word',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export default useStyles;
