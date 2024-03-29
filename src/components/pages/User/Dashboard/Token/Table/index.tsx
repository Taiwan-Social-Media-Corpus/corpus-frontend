import { memo } from 'react';
import { rem } from '@mantine/core';
import { APIToken } from 'types/user';
import Table from '@components/common/ui/Table';
import columns from './Columns';

type Props = { data: APIToken[] };

function APITokenTable(props: Props) {
  const { data } = props;
  const height = data.length < 3 ? rem(350) : '100vh';

  return (
    <Table
      data={data}
      columns={columns}
      withColumnBorders
      withBorder
      height={height}
      fontSize="md"
      horizontalSpacing="md"
      sx={{
        tableLayout: 'fixed',
        minWidth: rem(200),
        cursor: 'pointer',
        wordWrap: 'break-word',
        wordBreak: 'break-all',
      }}
    />
  );
}

export default memo(APITokenTable);
