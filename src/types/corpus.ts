// -------- NextJs --------

export type ConcordancePageProps = {
  payload: ConcordanceRequestBody;
};

export type ConcordanceParams = {
  e: string;
  pos: string;
};

// ---------- API ----------

export interface ConcordanceRequestBody {
  word: string;
  media: string;
  cqlEnable: boolean;
  postType: string;
  boards: string[];
  start: string;
  end: string;
  windowSize: string;
  page: number;
  fetchNumber: number;
}

export type Boards = {
  ptt: string[];
  dcard: string[];
};

export interface Concordance {
  summary: Summary;
  hits: Hit[];
  docInfos: DocInfos;
}

export interface DocInfos {
  [key: string]: {
    fromInputFile: string[];
    year: string[];
    author: string[];
    media: string[];
    title: string[];
    docId: string[];
    board: string[];
    lengthInTokens: number;
    mayView: boolean;
  };
}

export interface Hit {
  docPid: string;
  start: number;
  end: number;
  left: HitData;
  match: HitData;
  right: HitData;
}

export interface HitData {
  punct: string[];
  pos: string[];
  word: string[];
}

export interface Summary {
  searchParam: SearchParam;
  searchTime: number;
  countTime: number;
  windowFirstResult: number;
  requestedWindowSize: number;
  actualWindowSize: number;
  windowHasPrevious: boolean;
  windowHasNext: boolean;
  stillCounting: boolean;
  numberOfHits: number;
  numberOfHitsRetrieved: number;
  stoppedCountingHits: boolean;
  stoppedRetrievingHits: boolean;
  numberOfDocs: number;
  numberOfDocsRetrieved: number;
  docFields: DocFields;
  metadataFieldDisplayNames: MetadataFieldDisplayNames;
}

export interface DocFields {
  pidField: string;
  titleField: string;
  authorField: string;
  dateField: string;
}

export interface MetadataFieldDisplayNames {
  author: string;
  board: string;
  docId: string;
  fromInputFile: string;
  media: string;
  title: string;
  year: string;
}

export interface SearchParam {
  filter: string;
  first: string;
  indexname: string;
  number: string;
  patt: string;
  wordsaroundhit: string;
}
