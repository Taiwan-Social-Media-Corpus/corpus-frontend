import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  controls: {
    marginTop: rem(30),

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
      marginTop: rem(32),
    },
  },
  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}));

export default useStyles;
