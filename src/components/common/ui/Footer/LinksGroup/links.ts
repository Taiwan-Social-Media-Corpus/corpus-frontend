import meta from 'meta';
import Route from '@config/routes';
import { LinksGroupProps } from './types';

const links: LinksGroupProps[] = [
  {
    title: 'About',
    data: [
      { label: 'About Corpus', link: Route.about.intro },
      { label: 'Releases (frontend)', link: meta.github.releases.frontend },
      { label: 'Releases (backend)', link: meta.github.releases.frontend },
    ],
  },

  {
    title: 'Community',
    data: [
      { label: 'Follow on Facebook', link: meta.facebook.link },
      { label: 'Follow on Github', link: 'https://github.com/Retr0327' },
      {
        label: 'GitHub discussions (frontend)',
        link: meta.github.discussions.frontend,
      },
      {
        label: 'GitHub discussions (backend)',
        link: meta.github.discussions.backend,
      },
    ],
  },

  {
    title: 'Project',
    data: [
      { label: 'Documentation', link: meta.docsLink },
      { label: 'Github organization', link: meta.github.organization },
      { label: 'LOPEN', link: meta.github.lopen },
    ],
  },
];

export default links;
