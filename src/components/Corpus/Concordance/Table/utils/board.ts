function getBoard(media: string, board: string) {
  const match = media === 'ptt' ? /.*(?=-ptt)/ : /.*(?=-dcard)/;
  return board.match(match)![0];
}

function createLink(media: string, docId: string, board: string) {
  const filteredBoard = getBoard(media, board);

  if (media === 'ptt') return `https://www.ptt.cc/bbs/${filteredBoard}/${docId}.html`;
  return `https://www.dcard.tw/f/${filteredBoard}/p/${docId}`;
}

export { getBoard, createLink };
