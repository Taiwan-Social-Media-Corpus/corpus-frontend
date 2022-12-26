function getBoard(media: string, board: string) {
  return media === 'ptt' ? board.replace(/-ptt$/, '') : board.replace(/-dcard$/, '');
}

function createLink(media: string, board: string, docId: string) {
  const filteredBoard = getBoard(media, board);

  return media === 'ptt'
    ? `https://www.ptt.cc/bbs/${filteredBoard}/${docId}.html`
    : `https://www.dcard.tw/f/${filteredBoard}/p/${docId}`;
}

export { getBoard, createLink };
