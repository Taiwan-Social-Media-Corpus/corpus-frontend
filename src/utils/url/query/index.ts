import { ConcordanceRequestBody } from 'types/corpus';

function isInvalidPayload(payload: ConcordanceRequestBody) {
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
      media: params.has('m') ? params.get('m') : '',
      cqlEnable: params.get('c') === 'true',
      postType: params.has('p') ? params.get('p') : '',
      boards: !boardsParam ? null : boardsParam.split(','),
      start: params.get('s'),
      end: params.get('e'),
      windowSize: params.get('win'),
      page: Number(page),
      fetchNumber: Number(params.get('f')),
    } as ConcordanceRequestBody;

    if (isInvalidPayload(payload)) {
      return false;
    }

    return payload;
  } catch (error) {
    return false;
  }
}

export default getConcordancePayload;
