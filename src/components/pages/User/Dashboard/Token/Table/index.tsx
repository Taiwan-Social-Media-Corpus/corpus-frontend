import { memo } from 'react';
import { APIToken } from 'types/user';
import Table from '@components/common/ui/Table';
import buildColumns from './Columns';

type Props = { data: APIToken[] };

function APITokenTable(props: Props) {
  const { data } = props;
  const columns = buildColumns();

  return (
    <Table
      data={data}
      columns={columns}
      withColumnBorders
      withBorder
      fontSize="md"
      horizontalSpacing="md"
      sx={{
        tableLayout: 'fixed',
        minWidth: 700,
        cursor: 'pointer',
        wordWrap: 'break-word',
        wordBreak: 'break-all',
      }}
    />
  );
}

export default memo(APITokenTable);
