import { format } from 'date-fns';
import { APIToken } from 'types/user';
import { zhTW } from 'date-fns/locale';
import { ColumnDef } from '@tanstack/react-table';
import ColumnHeader from '@components/common/ui/Table/components/Header';
import HelperButtons from './Buttons';

function formatTime(date: Date) {
  return format(new Date(date), 'yyyy/MM/dd HH:mm', { locale: zhTW });
}

const columns: ColumnDef<APIToken, any>[] = [
  {
    accessorKey: 'apiToken',
    header: () => <ColumnHeader position="left" content="API Token" />,
    cell: (info) => <div style={{ cursor: 'text' }}>{info.row.original.apiToken}</div>,
    size: 100,
  },
  {
    accessorKey: 'createdAt',
    header: () => <ColumnHeader position="left" content="Creation Time" />,
    cell: (info) => formatTime(info.row.original.createdAt),
    size: 60,
  },
  {
    accessorKey: 'expiredAt',
    header: () => <ColumnHeader position="left" content="Expire" />,
    cell: (info) => formatTime(info.row.original.expiredAt),
    size: 60,
  },
  {
    accessorKey: 'buttons',
    header: '',
    cell: (info) => <HelperButtons apiToken={info.row.original.apiToken} />,
    size: 60,
  },
];

export default columns;
