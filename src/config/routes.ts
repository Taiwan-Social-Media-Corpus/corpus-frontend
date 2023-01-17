import urlJoin from 'url-join';

const about = '/about';
const corpus = '/corpus';
const recovery = '/recovery';
const dashboard = '/dashboard';

const Route = {
  home: '/',
  about: {
    root: about,
    intro: urlJoin(about, 'intro'),
    media: urlJoin(about, 'media'),
    blacklab: urlJoin(about, 'blacklab'),
  },
  guide: '/guide',
  login: '/login',
  logout: '/logout',
  signUp: '/signup',
  dashboard: {
    root: dashboard,
    account: urlJoin(dashboard, 'account'),
    token: urlJoin(dashboard, 'token'),
  },
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
