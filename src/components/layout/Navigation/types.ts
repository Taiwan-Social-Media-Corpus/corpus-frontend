import { Icon } from '@tabler/icons-react';

export type NestedLinks = { link: string; label: string }[];

export type LinkItem = {
  link: string;
  label: string;
  links?: NestedLinks;
};

export type MenuLink = LinkItem & { icon: Icon };

export type NavbarLink = {
  link?: string;
  label: string;
  color: string;
  icon: Icon;
  links?: NestedLinks;
}[];
