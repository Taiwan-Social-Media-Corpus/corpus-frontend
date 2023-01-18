import { Concordance } from 'types/corpus';
import Table from '@components/common/ui/Table';
import buildColumns from './Columns';

type TableProps = {
  data: Concordance;
  showPos: boolean;
};

function ConcordanceTable(props: TableProps) {
  const { data, showPos } = props;
  const columns = buildColumns(data.docInfos, showPos);

  return (
    <Table
      data={data.hits}
      columns={columns}
      highlightOnHover
      horizontalSpacing="md"
      fontSize="lg"
      sx={{ tableLayout: 'fixed', minWidth: 700, cursor: 'pointer' }}
    />
  );
}

export default ConcordanceTable;
