import { ConcordanceRequestBody } from 'types/corpus';
import { FieldValues } from '@components/pages/Corpus/Home/Form/types';

function isInvalidPayload(payload: ConcordanceRequestBody) {
  const { boards, cqlEnable, page, ...rest } = payload;
  const payloadValues = Object.values(rest);
  return payloadValues.some((value) => value === null);
}

function decodeURL(e: string, page: string) {
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

function encodeURL(values: FieldValues) {
  const {
    media,
    start,
    end,
    windowSize,
    word,
    boards: selectedBoards,
    postType,
    cqlEnable,
    fetchNumber,
  } = values;

  const base64 = window.btoa(
    `m=${media === 'all' ? '' : media}&w=${encodeURI(
      word.replaceAll('&', '%26')
    )}&b=${selectedBoards}&p=${
      postType === 'all' ? '' : postType
    }&c=${cqlEnable}&s=${start}&e=${end}&win=${windowSize}&f=${fetchNumber}`
  );

  return encodeURIComponent(base64);
}

export { encodeURL, decodeURL };
