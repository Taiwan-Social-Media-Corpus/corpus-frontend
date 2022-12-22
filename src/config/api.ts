import urlJoin from 'url-join';

// ----- version tag -----
const V1 = 'v1';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('API_SERVICE undefined');
}

const api = process.env.NODE_ENV === 'production' ? `/api/${V1}` : API_URL;

// ----- user service -----
const user = urlJoin(api, 'user');
const activation = urlJoin(user, 'activation');
const recovery = urlJoin(user, 'recovery');
const email = urlJoin(user, 'email');

// ---- corpus service ----

const corpus = urlJoin(api, 'corpus');

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
      media: urlJoin(corpus, 'media'),
      boards: urlJoin(corpus, 'boards'),
      concordance: {
        root: urlJoin(corpus, 'concordance'),
        csv: urlJoin(corpus, 'concordance', 'csv'),
      },
    },
  },
};

export default API;
