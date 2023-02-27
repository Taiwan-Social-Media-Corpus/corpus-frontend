import { PartialBy } from 'types';
import { Icon } from '@tabler/icons-react';

export type NestedLinks = { link: string; label: string }[];

export type LinkItem = {
  link: string;
  label: string;
  links?: NestedLinks;
};

// --------- menu ---------

export type MenuLink = PartialBy<LinkItem, 'link'> & { icon: Icon };

// -------- navbar --------

export type NavbarLink = {
  link?: string;
  label: string;
  color: string;
  icon: Icon;
  links?: NestedLinks;
};
