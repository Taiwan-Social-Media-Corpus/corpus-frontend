import { Boards } from 'types/corpus';
import createPostTypeOptions from './post';

const mediaOptions = [
  { label: 'All', value: 'all' },
  { label: 'PTT', value: 'ptt', image: '/ptt-logo.png' },
  { label: 'Dcard', value: 'dcard', image: '/dcard-logo.png' },
];

function createBoardOptions(boards: Boards, media: string) {
  return boards[media as keyof Boards].map((value) => ({
    label: value,
    value,
  }));
}

export { mediaOptions, createBoardOptions, createPostTypeOptions };
