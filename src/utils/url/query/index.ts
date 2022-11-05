import { RequestBody } from 'types';

function getTablePayload(page: string, e: string) {
  try {
    const decoded = decodeURIComponent(window.atob(e));
    const params = new URLSearchParams(decoded);

    return {
      word: params.get('w'),
      media: params.get('m') === 'all' ? '' : params.get('m'),
      cqlEnable: params.get('c') === 'true',
      postType: params.get('p') === 'all' ? '' : params.get('p'),
      boards: params.get('b')?.split(','),
      start: params.get('s'),
      end: params.get('e'),
      windowSize: params.get('win'),
      page: Number(page),
      fetchNumber: Number(params.get('f')),
    } as RequestBody;
  } catch (error) {
    return false;
  }
}

export default getTablePayload;
