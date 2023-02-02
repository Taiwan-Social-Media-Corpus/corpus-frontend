import { PartialBy } from 'types';
import { TablerIcon } from '@tabler/icons';

export type NestedLinks = { link: string; label: string }[];

export type LinkItem = {
  link: string;
  label: string;
  links?: NestedLinks;
};

// --------- menu ---------

export type MenuLink = PartialBy<LinkItem, 'link'> & { icon: TablerIcon };

// -------- navbar --------

export type NavbarLink = {
  link?: string;
  label: string;
  color: string;
  icon: TablerIcon;
  links?: NestedLinks;
};
