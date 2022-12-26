import dynamic from 'next/dynamic';
import { DocInfos, Hit } from 'types/corpus';
import { ColumnDef } from '@tanstack/react-table';

const MediaCard = dynamic(() => import('./Cell/MediaCard').then((module) => module));
const ConcordanceData = dynamic(() => import('./Cell/Concordance').then((module) => module));
const ColumnHeader = dynamic(() => import('./Header').then((module) => module));

function buildColumns(docInfos: DocInfos, showPos: boolean): ColumnDef<Hit, any>[] {
  return [
    {
      accessorKey: 'link',
      header: '',
      size: 10,
      cell: (info) => <MediaCard docInfos={docInfos} docPid={info.row.original.docPid} />,
    },
    {
      accessorKey: 'beforeHit',
      header: () => <ColumnHeader position="right" content="Before hit" />,
      cell: (info) => (
        <ConcordanceData
          columnId={info.cell.column.id}
          data={info.row.original}
          showPos={showPos}
        />
      ),
    },
    {
      accessorKey: 'hit',
      header: () => <ColumnHeader position="center" content="Hit" />,
      cell: (info) => (
        <ConcordanceData
          columnId={info.cell.column.id}
          data={info.row.original}
          showPos={showPos}
        />
      ),
      size: 60,
    },
    {
      accessorKey: 'afterHit',
      header: () => <ColumnHeader position="left" content="After hit" />,
      cell: (info) => (
        <ConcordanceData
          columnId={info.cell.column.id}
          data={info.row.original}
          showPos={showPos}
        />
      ),
    },
  ];
}

export default buildColumns;
