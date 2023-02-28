import {
  IconApi,
  IconUser,
  IconLogout,
  IconSocial,
  IconServer,
  IconSettings,
  IconInfoCircle,
  IconReportSearch,
} from '@tabler/icons-react';
import urlJoin from 'url-join';
import { DEFAULT_THEME } from '@mantine/core';
import { LinkItem, MenuLink, NavbarLink } from 'types/link';

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

const corpusLink = { link: Route.corpus.root, label: 'Corpus' };
const aboutLink = { link: Route.about.intro, label: 'About' };
const guideLink = { link: Route.guide, label: 'Guide' };
const loginLink = { link: Route.login, label: 'Developer' };

export function createHeaderLinks(hasSession: boolean): LinkItem[] {
  const links = [corpusLink, aboutLink, guideLink];
  if (!hasSession) return [...links, loginLink];
  return links;
}

export function createMenuLinks(hasSession: boolean) {
  const links: MenuLink[] = [
    { ...corpusLink, icon: IconReportSearch },
    {
      label: 'About',
      icon: IconInfoCircle,
      links: [
        { label: 'Introduction', link: Route.about.intro },
        { label: 'Taiwan Social Media', link: Route.about.media },
        { label: 'Blacklab', link: Route.about.blacklab },
      ],
    },
  ];

  if (!hasSession) {
    return links.concat({ ...loginLink, icon: IconUser });
  }

  return links.concat({ label: 'Logout', link: Route.logout, icon: IconLogout });
}

export const navbarLinks: { about: NavbarLink[]; dashboard: NavbarLink[] } = {
  about: [
    {
      link: Route.about.intro,
      label: 'Introduction',
      color: DEFAULT_THEME.colors.blue[5],
      icon: IconInfoCircle,
    },
    {
      link: Route.about.media,
      label: 'Taiwan Social Media',
      color: DEFAULT_THEME.colors.violet[5],
      icon: IconSocial,
    },
    {
      link: Route.about.blacklab,
      label: 'Blacklab',
      color: '#000',
      icon: IconServer,
    },
  ],
  dashboard: [
    {
      link: Route.dashboard.account,
      label: 'Account',
      color: DEFAULT_THEME.colors.green[8],
      icon: IconSettings,
    },
    {
      link: Route.dashboard.token,
      label: 'API token',
      color: DEFAULT_THEME.colors.blue[5],
      icon: IconApi,
    },
  ],
};

export default Route;
