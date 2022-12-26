function getBoard(media: string, board: string) {
  return media === 'ptt' ? board.replace(/-ptt$/, '') : board.replace(/-dcard$/, '');
}

export default getBoard;
