import { createStyles, rem, em } from '@mantine/core';
import type { MantineTheme } from '@mantine/core';

const BREAKPOINT = `@media (max-width: ${em(960)})`;

function getGradient(theme: MantineTheme, variant: 'text' | 'bg') {
  if (variant === 'text') {
    return `linear-gradient(52deg, ${theme.colors.blue[theme.colorScheme === 'dark' ? 5 : 7]} 3%, ${
      theme.colors.cyan[theme.colorScheme === 'dark' ? 4 : 5]
    } 97%)`;
  }

  return `linear-gradient(52deg, ${theme.colors.blue[theme.colorScheme === 'dark' ? 7 : 7]} 3%, ${
    theme.colors.cyan[theme.colorScheme === 'dark' ? 7 : 5]
  } 97%)`;
}

const useStyles = createStyles((theme) => ({
  jumbotron: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

    [BREAKPOINT]: {
      paddingTop: rem(45),
    },
  },

  inner: {
    position: 'relative',
    paddingTop: rem(190),
    paddingBottom: rem(300),

    [BREAKPOINT]: {
      paddingTop: rem(50),
      paddingBottom: rem(100),
    },
  },

  description: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    fontSize: rem(24),
    maxWidth: rem(800),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],

    [BREAKPOINT]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(64),
    paddingLeft: rem(46),
    paddingRight: rem(46),
    fontSize: rem(20),

    [BREAKPOINT]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },

  controlPrimary: {
    border: 0,
    fontWeight: 700,
    backgroundImage: getGradient(theme, 'bg'),
  },

  githubControl: {
    borderColor: 'transparent',
    backgroundColor: theme.colors.dark[6],
    color: theme.white,
    fontWeight: 700,

    '&:hover': {
      backgroundColor: theme.colors.dark[5],
      color: theme.white,
    },
  },

  feature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    [`@media (max-width: ${em(800)})`]: {
      flexDirection: 'row',
    },
  },

  featureBody: {
    marginTop: theme.spacing.xs,

    [`@media (max-width: ${em(800)})`]: {
      marginTop: 0,
      marginLeft: theme.spacing.lg,
    },
  },

  featureTitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  featureIcon: {
    color: theme.white,
    borderRadius: theme.radius.md,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: rem(50),
    height: rem(50),
    backgroundImage: getGradient(theme, 'bg'),

    '& svg': {
      display: 'block',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 90,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },
}));

export default useStyles;
