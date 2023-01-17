import { TablerIcon } from '@tabler/icons';
import { LinkItem, PartialBy } from 'types';

export type MenuProps = {
  hasSession: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type MenuLink = PartialBy<LinkItem, 'link'> & { icon: TablerIcon };
