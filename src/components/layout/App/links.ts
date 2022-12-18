import Route from '@config/routes';
import { DEFAULT_THEME } from '@mantine/core';
import { IconBook2, IconReportSearch, IconInfoCircle, IconSocial, IconServer } from '@tabler/icons';

const links = {
  header: [
    { link: Route.CORPUS, label: 'Corpus' },
    { link: `${Route.ABOUT}/intro`, label: 'About' },
    { link: Route.GUIDE, label: 'Guide' },
  ],
  menu: [
    {
      link: Route.CORPUS,
      label: 'Corpus',
      icon: IconReportSearch,
    },
    {
      link: `${Route.ABOUT}/intro`,
      label: 'About',
      icon: IconInfoCircle,
    },
    {
      link: Route.GUIDE,
      label: 'Guide',
      icon: IconBook2,
    },
  ],
  navbar: {
    about: [
      {
        to: `${Route.ABOUT}/intro`,
        label: 'Introduction',
        color: DEFAULT_THEME.colors.blue[5],
        icon: IconInfoCircle,
      },
      {
        to: `${Route.ABOUT}/media`,
        label: 'Taiwan Social Media',
        color: DEFAULT_THEME.colors.violet[5],
        icon: IconSocial,
      },
      {
        to: `${Route.ABOUT}/blacklab`,
        label: 'Blacklab',
        color: '#000',
        icon: IconServer,
      },
    ],
  },
};

export default links;
