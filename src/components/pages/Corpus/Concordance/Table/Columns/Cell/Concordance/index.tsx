import { Hit, HitData } from 'types/corpus';
import { CSSProperties, memo, useMemo } from 'react';
import renderPos from './utils';

type Props = { columnId: string; data: Hit; showPos: boolean };

function ConcordanceData(props: Props) {
  const { columnId, data, showPos } = props;

  const hitDataFactories: { [key: string]: HitData } = {
    beforeHit: data.left,
    hit: data.match,
    afterHit: data.right,
  };

  const alignFactories: { [key: string]: CSSProperties['textAlign'] } = {
    beforeHit: 'right',
    hit: 'center',
    afterHit: 'left',
  };

  const items = useMemo(
    () =>
      showPos
        ? renderPos(hitDataFactories[columnId].word, hitDataFactories[columnId].pos)
        : hitDataFactories[columnId].word.join(''),
    [showPos]
  );

  return (
    <div
      style={{
        textAlign: alignFactories[columnId],
        wordWrap: 'break-word',
        wordBreak: 'break-all',
      }}
    >
      {items}
    </div>
  );
}

export default memo(ConcordanceData);
