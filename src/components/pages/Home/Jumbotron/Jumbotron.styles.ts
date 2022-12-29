import { createStyles } from '@mantine/core';
import type { MantineTheme } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 960px)';

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
      paddingTop: 45,
    },
  },

  inner: {
    position: 'relative',
    paddingTop: 190,
    paddingBottom: 180,

    [BREAKPOINT]: {
      paddingTop: 50,
      paddingBottom: 100,
    },
  },

  description: {
    marginTop: theme.spacing.xl * 1.5,
    fontSize: 24,
    maxWidth: 800,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 64,
    paddingLeft: 46,
    paddingRight: 46,
    fontSize: 20,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
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

    '@media (max-width: 800px)': {
      flexDirection: 'row',
    },
  },

  featureBody: {
    marginTop: theme.spacing.xs,

    '@media (max-width: 800px)': {
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
    minWidth: 50,
    height: 50,
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
