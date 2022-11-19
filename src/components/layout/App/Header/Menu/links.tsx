import Route from '@config/routes';
import { IconBook2, IconReportSearch, IconInfoCircle } from '@tabler/icons';

type Links = {
  link: string;
  label: string;
  icon: any;
  display?: 'none' | undefined;
}[];

const links: Links = [
  {
    link: Route.CORPUS,
    label: 'Corpus',
    icon: <IconReportSearch />,
  },
  {
    link: Route.ABOUT,
    label: 'About',
    icon: <IconInfoCircle />,
  },
  {
    link: Route.GUIDE,
    label: 'Guide',
    icon: <IconBook2 />,
  },
];

export default links;
