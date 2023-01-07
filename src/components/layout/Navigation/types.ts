import { TablerIcon } from '@tabler/icons';

export type NestedLinks = { link: string; label: string }[];

export type LinkItem = {
  link: string;
  label: string;
  links?: NestedLinks;
};

export type MenuLink = LinkItem & { icon: TablerIcon };

export type NavbarLink = {
  link?: string;
  label: string;
  color: string;
  icon: TablerIcon;
  links?: NestedLinks;
}[];
