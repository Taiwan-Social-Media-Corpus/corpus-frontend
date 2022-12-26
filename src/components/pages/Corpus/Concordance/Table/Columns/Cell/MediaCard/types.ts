import { DocInfos } from 'types/corpus';

export type PostLinkProps = {
  media: string;
  board: string;
  docId: string;
};

export type MediaCardProps = {
  docInfos: DocInfos;
  docPid: string;
};
