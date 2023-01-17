import { memo } from 'react';
import { Button } from '@mantine/core';
import { openModal } from '@mantine/modals';
import { IconReportSearch } from '@tabler/icons';
import ReportContent from './Content';
import { HelperButtonProps } from '../../types';

type Props = Pick<HelperButtonProps, 'numberofHits'>;

function SearchReport(props: Props) {
  const { numberofHits } = props;

  return (
    <Button
      variant="default"
      leftIcon={<IconReportSearch size={14} />}
      onClick={() => {
        openModal({
          zIndex: 9999,
          overlayOpacity: 0.55,
          children: <ReportContent numberofHits={numberofHits} />,
        });
      }}
    >
      Search Report
    </Button>
  );
}

export default memo(SearchReport);
