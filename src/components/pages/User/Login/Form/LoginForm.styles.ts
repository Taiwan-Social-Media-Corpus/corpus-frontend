import { createStyles, rem, em } from '@mantine/core';

const useStyles = createStyles(() => ({
  anchor: {
    [`@media (min-width: ${em(420)})`]: {
      marginLeft: rem(127),
    },
    [`@media (max-width: ${em(419)})`]: {
      marginLeft: rem(120),
    },
    [`@media (max-width: ${em(415)})`]: {
      marginLeft: rem(118),
    },
    [`@media (max-width: ${em(410)})`]: {
      marginLeft: rem(110),
    },
    [`@media (max-width: ${em(405)})`]: {
      marginLeft: rem(107),
    },
    [`@media (max-width: ${em(400)})`]: {
      marginLeft: rem(93),
    },
    [`@media (max-width: ${em(375)})`]: {
      marginLeft: rem(80),
    },
    [`@media (max-width: ${em(360)})`]: {
      marginLeft: rem(65),
    },
    [`@media (max-width: ${em(280)})`]: {
      marginLeft: rem(-13),
    },
  },
}));

export default useStyles;
