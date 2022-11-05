function getBoard(media: string, board: string) {
  const match = media === 'ptt' ? /.*(?=-ptt)/ : /.*(?=-dcard)/;
  return board.match(match)![0];
}

export default getBoard;
