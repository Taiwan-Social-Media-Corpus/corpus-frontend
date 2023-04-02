import layoutConfig from '@config/layout';
import { createStyles, getStylesRef, rem, em } from '@mantine/core';

const useStyles = createStyles((theme) => {
  const icon = getStylesRef('icon');

  return {
    navbar: {
      boxSizing: 'border-box',
      height: '100vh',
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
      }`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      position: 'fixed',
      zIndex: 5,
      top: 0,
      bottom: 0,
      left: 0,
      width: layoutConfig.navbar.width,

      [`@media (max-width: ${em(layoutConfig.navbar.breakpoint)})`]: {
        display: 'none',
      },
    },

    userSection: {
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
      paddingTop: `calc(${rem(layoutConfig.header.height)} + ${theme.spacing.md})`,

      [`@media (max-width: ${em(layoutConfig.navbar.breakpoint)})`]: {
        paddingBottom: 120,
      },
    },

    section: {
      paddingRight: theme.spacing.md,
      paddingBottom: `calc(${theme.spacing.xs} * 2)`,
      paddingLeft: theme.spacing.md,
      paddingTop: theme.spacing.md,

      [`@media (max-width: ${em(layoutConfig.navbar.breakpoint)})`]: {
        paddingBottom: 120,
      },
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    logoutLink: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${rem(theme.spacing.xs)} ${rem(theme.spacing.sm)}`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    logoutIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },
  };
});

export default useStyles;
