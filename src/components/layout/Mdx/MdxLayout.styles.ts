import layoutConfig from '@config/layout';
import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    zIndex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    paddingRight: `calc(${theme.spacing.xl} * 2)`,

    [`@media (max-width: ${em(layoutConfig.mdx.breakpoint)})`]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  },

  content: {
    marginTop: theme.spacing.xl,
    width: '100%',
    maxWidth: rem(layoutConfig.mdx.contentWidth + layoutConfig.mdx.tableOfContentsWidth),
    marginLeft: 'auto',
    marginRight: 'auto',

    [`@media (max-width: ${em(layoutConfig.mdx.breakpoint)})`]: {
      width: '100%',
      paddingRight: 0,
    },
  },

  wrapper: {
    minHeight: `calc(100vh - ${rem(350)}})`,
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.colorScheme === 'dark' ? 'none' : theme.shadows.sm,
    paddingBottom: rem(80),
  },

  tableOfContents: {
    flex: `0 0 ${rem(layoutConfig.mdx.tableOfContentsWidth)}`,

    [`@media (max-width: ${em(layoutConfig.mdx.breakpoint)})`]: {
      display: 'none',
    },
  },
}));

export default useStyles;
