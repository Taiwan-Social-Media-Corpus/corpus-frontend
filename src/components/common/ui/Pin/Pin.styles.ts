import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
      fontSize: rem(15),
    },
  },
}));

export default useStyles;
