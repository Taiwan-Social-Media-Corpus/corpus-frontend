export type LinkType = {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
};

export type LinkItemProps = {
  link: LinkType;
};

export type LinksTypes = {
  links: LinkType[];
};
