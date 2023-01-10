import urlJoin from 'url-join';

const isProduction = process.env.NODE_ENV === 'production';

// ----- version tag -----
const V1 = 'v1';

// ------ api urls ------
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const EXTERNAL_API_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;

if (!API_URL || !EXTERNAL_API_URL) {
  throw new Error('api urls undefined');
}

const api = isProduction ? `/service/api/${V1}` : API_URL;
const externalAPI = isProduction ? `http://nginx:80/service/api/${V1}` : EXTERNAL_API_URL;

// ----- user service -----
const user = urlJoin(api, 'user');
const activation = urlJoin(user, 'activation');
const recovery = urlJoin(user, 'recovery');
const email = urlJoin(user, 'email');

// ---- corpus service ----
const corpus = urlJoin(api, 'corpus');
const externalCorpus = urlJoin(externalAPI, 'corpus');

const API = {
  V1: {
    user: {
      root: user,
      email: {
        root: email,
        validate: urlJoin(email, 'validate'),
        resend: urlJoin(email, 'resend'),
      },
      password: urlJoin(user, 'password'),
      session: urlJoin(user, 'session'),
      activation: {
        root: activation,
        email: urlJoin(activation, 'email'),
        resend: urlJoin(activation, 'resend'),
      },
      recovery: {
        root: recovery,
        password: urlJoin(recovery, 'password'),
        code: urlJoin(recovery, 'code'),
        resend: urlJoin(recovery, 'resend'),
      },
    },
    corpus: {
      root: corpus,
      media: urlJoin(externalCorpus, 'media'),
      stats: {
        corpus: `${urlJoin(externalCorpus, 'stats')}?type=word`,
      },
      boards: urlJoin(externalCorpus, 'boards'),
      concordance: {
        root: urlJoin(corpus, 'concordance'),
        csv: urlJoin(corpus, 'concordance', 'csv'),
      },
    },
  },
};

export default API;
