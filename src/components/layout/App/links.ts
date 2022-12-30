import {
  IconUser,
  IconBook2,
  IconServer,
  IconSocial,
  IconInfoCircle,
  IconReportSearch,
} from '@tabler/icons';
import Route from '@config/routes';
import { DEFAULT_THEME } from '@mantine/core';

const { corpus, login, about, guide } = Route;

const corpusLink = { link: corpus.root, label: 'Corpus' };
const loginLink = { link: login, label: 'Developer' };
const aboutLink = { link: about.intro, label: 'About' };
const guideLink = { link: guide, label: 'Guide' };

const links = {
  header: [corpusLink, aboutLink, guideLink, loginLink],
  menu: [
    { ...corpusLink, icon: IconReportSearch },
    { ...aboutLink, icon: IconInfoCircle },
    { ...guideLink, icon: IconBook2 },
    { ...loginLink, icon: IconUser },
  ],
  navbar: {
    about: [
      {
        to: about.intro,
        label: 'Introduction',
        color: DEFAULT_THEME.colors.blue[5],
        icon: IconInfoCircle,
      },
      {
        to: about.media,
        label: 'Taiwan Social Media',
        color: DEFAULT_THEME.colors.violet[5],
        icon: IconSocial,
      },
      {
        to: about.blacklab,
        label: 'Blacklab',
        color: '#000',
        icon: IconServer,
      },
    ],
  },
};

export default links;
