import Route from '@config/routes';
import layoutConfig from '@config/layout';
import { LinksGroupProps } from './types';

const links: LinksGroupProps[] = [
  {
    title: 'About',
    data: [
      { label: 'About Corpus', link: Route.about.intro },
      { label: 'Releases', link: layoutConfig.github.releases },
    ],
  },

  {
    title: 'Community',
    data: [
      { label: 'Follow on Facebook', link: layoutConfig.facebook.link },
      { label: 'Follow on Github', link: 'https://github.com/Retr0327' },
      {
        label: 'GitHub discussion',
        link: layoutConfig.github.discussion,
      },
    ],
  },

  {
    title: 'Project',
    data: [
      { label: 'Documentation', link: Route.about.intro },
      { label: 'Github organization', link: layoutConfig.github.organization },
      { label: 'LOPEN', link: layoutConfig.github.lopen },
    ],
  },
];

export default links;
