import urlJoin from 'url-join';

const domain = process.env.NEXT_PUBLIC_API_SERVICE;

if (!domain) {
  throw new Error('API_SERVICE undefined');
}

const api = process.env.NODE_ENV === 'production' ? '/api' : domain;

const corpus = urlJoin(api, 'corpus');

const API = { corpus, boards: urlJoin(corpus, 'boards') } as const;

export default API;
