import Route from '@config/routes';
import { IconUser, IconReportSearch, IconInfoCircle, IconLogout } from '@tabler/icons';
import { MenuLink } from './types';

function createMenuLinks(hasSession: boolean) {
  const links: MenuLink[] = [
    { label: 'Corpus', link: Route.corpus.root, icon: IconReportSearch },
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
    return links.concat({ label: 'Developer', link: Route.login, icon: IconUser });
  }

  return links.concat({ label: 'Logout', link: Route.logout, icon: IconLogout });
}

export default createMenuLinks;
