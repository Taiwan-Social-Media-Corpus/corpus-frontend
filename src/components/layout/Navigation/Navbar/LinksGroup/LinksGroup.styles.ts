import { createStyles, getStylesRef, rem } from '@mantine/core';

const useStyles = createStyles((theme) => {
  const icon = getStylesRef('icon');

  return {
    link: {
      ...theme.fn.focusStyles(),
      WebkitTapHighlightColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      fontSize: theme.fontSizes.xs,
      padding: `${rem(8)} ${theme.spacing.xs}`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      userSelect: 'none',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },

    linkInner: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
    },

    linkIcon: {
      ref: icon,
      marginRight: theme.spacing.sm,
    },

    chevron: {
      transition: 'transform 200ms ease',
    },
  };
});

export default useStyles;
