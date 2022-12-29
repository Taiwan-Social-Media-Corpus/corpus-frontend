import { memo, useState } from 'react';
import { Button, Modal } from '@mantine/core';
import { IconReportSearch } from '@tabler/icons';
import ReportContent from './Content';
import { HelperButtonProps } from '../../types';

type Props = Pick<HelperButtonProps, 'numberofHits'>;

function SearchReport(props: Props) {
  const { numberofHits } = props;
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} overlayOpacity={0.55} zIndex={9999}>
        <ReportContent numberofHits={numberofHits} />
      </Modal>

      <Button
        variant="default"
        leftIcon={<IconReportSearch size={14} />}
        onClick={() => setOpened(true)}
      >
        Search Report
      </Button>
    </>
  );
}

export default memo(SearchReport);
