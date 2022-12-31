import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  anchor: {
    [`@media (min-width: ${420}px)`]: {
      marginLeft: 127,
    },
    [`@media (max-width: ${419}px)`]: {
      marginLeft: 120,
    },
    [`@media (max-width: ${415}px)`]: {
      marginLeft: 118,
    },
    [`@media (max-width: ${410}px)`]: {
      marginLeft: 110,
    },
    [`@media (max-width: ${405}px)`]: {
      marginLeft: 107,
    },
    [`@media (max-width: ${400}px)`]: {
      marginLeft: 93,
    },
    [`@media (max-width: ${375}px)`]: {
      marginLeft: 80,
    },
    [`@media (max-width: ${360}px)`]: {
      marginLeft: 65,
    },
    [`@media (max-width: ${280}px)`]: {
      marginLeft: -13,
    },
  },
}));

export default useStyles;
