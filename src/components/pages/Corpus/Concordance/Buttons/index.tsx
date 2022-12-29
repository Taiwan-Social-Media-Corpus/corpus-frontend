import { memo } from 'react';
import { Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { HelperButtonProps } from './types';
import { ReturnButton, PosController, SearchReport } from './Controls';

function HelperButtons(props: HelperButtonProps) {
  const { showPos, setShowPos, numberofHits } = props;
  const miniScreen = useMediaQuery('(max-width: 300px)');

  return (
    <Group spacing={miniScreen ? 'xs' : 30} mb={miniScreen ? 'xd' : 2}>
      <ReturnButton />
      <SearchReport numberofHits={numberofHits} />
      <PosController setShowPos={setShowPos} showPos={showPos} />
    </Group>
  );
}

export default memo(HelperButtons);
