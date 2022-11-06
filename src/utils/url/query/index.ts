import { RequestBody } from 'types';

function isInvalidPayload(payload: RequestBody) {
  const { boards, cqlEnable, page, ...rest } = payload;
  const payloadValues = Object.values(rest);
  return payloadValues.some((value) => value === null);
}

function getConcordancePayload(page: string, e: string) {
  try {
    const decoded = decodeURIComponent(Buffer.from(e, 'base64').toString('ascii'));
    const params = new URLSearchParams(decoded);
    const boardsParam = params.get('b');
    const payload = {
      word: params.get('w'),
      media: params.get('m') === 'all' ? '' : params.get('m'),
      cqlEnable: params.get('c') === 'true',
      postType: params.get('p') === 'all' ? '' : params.get('p'),
      boards: !boardsParam ? null : boardsParam.split(','),
      start: params.get('s'),
      end: params.get('e'),
      windowSize: params.get('win'),
      page: Number(page),
      fetchNumber: Number(params.get('f')),
    } as RequestBody;

    if (isInvalidPayload(payload)) {
      return false;
    }

    return payload;
  } catch (error) {
    return false;
  }
}

export default getConcordancePayload;
