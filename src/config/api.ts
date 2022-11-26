import urlJoin from 'url-join';

const domain = process.env.NEXT_PUBLIC_API_SERVICE;
const blacklabDomain = process.env.NEXT_PUBLIC_BLACKLAB_URL;

if (!domain) {
  throw new Error('API_SERVICE undefined');
}

if (!blacklabDomain) {
  throw new Error('BLACKLAB_URL undefined');
}

const api = process.env.NODE_ENV === 'production' ? '/api/v1' : domain;

const corpus = urlJoin(api, 'corpus');

const API = { corpus, boards: urlJoin(corpus, 'boards') } as const;

export { API, blacklabDomain };
