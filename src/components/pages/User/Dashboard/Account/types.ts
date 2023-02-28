import { Icon } from '@tabler/icons-react';

export type Blocks = {
  content: JSX.Element;
  icon: Icon;
  name: string;
  description: string;
  query: string;
}[];

export type AccountPageProps = {
  blocks: Blocks;
};
