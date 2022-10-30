import { IconBook2, IconReportSearch, IconInfoCircle } from '@tabler/icons';

type Links = {
  link: string;
  label: string;
  icon: any;
  display?: 'none' | undefined;
}[];

const links: Links = [
  {
    link: '/corpus',
    label: 'Corpus',
    icon: <IconReportSearch />,
  },
  {
    link: '/about',
    label: 'About',
    icon: <IconInfoCircle />,
  },
  {
    link: '/guide',
    label: 'Guide',
    icon: <IconBook2 />,
  },
];

export default links;
