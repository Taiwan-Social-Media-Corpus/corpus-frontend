import meta from 'meta';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  content: {
    minHeight: 'calc(100vh - 350px)',
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.colorScheme === 'dark' ? 'none' : theme.shadows.sm,
    paddingBottom: 80,

    [`@media (min-width: ${420}px)`]: {
      paddingBottom: 280,
    },

    [`@media (max-width: ${420}px)`]: {
      paddingBottom: 380,
    },
  },

  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    zIndex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.xl * 2,
    paddingRight: theme.spacing.xl * 2,

    [`@media (max-width: ${meta.layout.mdx.breakpoint}px)`]: {
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
    },
  },

  container: {
    marginTop: theme.spacing.xl,
    width: '100%',
    maxWidth: meta.layout.mdx.contentWidth + meta.layout.mdx.tableOfContentsWidth,
    marginLeft: theme.spacing.xl,
    marginRight: 'auto',

    [`@media (max-width: ${meta.layout.mdx.breakpoint}px)`]: {
      width: '100%',
      paddingRight: 0,
    },
  },

  title: {
    marginTop: theme.spacing.xl * 1.2,
    marginBottom: theme.spacing.md,
    wordBreak: 'break-word',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export default useStyles;
