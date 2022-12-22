import urlJoin from 'url-join';

const recovery = '/recovery';
const corpus = '/corpus';

const Route = {
  home: '/',
  about: '/about',
  guide: '/guide',
  login: '/login',
  logout: '/logout',
  signUp: '/signup',
  activation: '/activation',
  recovery: {
    root: recovery,
    validation: urlJoin(recovery, 'validation'),
    reset: urlJoin(recovery, 'reset'),
  },
  corpus: {
    root: corpus,
    concordance: urlJoin(corpus, '/concordance'),
  },
  notFound: '/404',
  serverError: '/500',
} as const;

export default Route;
