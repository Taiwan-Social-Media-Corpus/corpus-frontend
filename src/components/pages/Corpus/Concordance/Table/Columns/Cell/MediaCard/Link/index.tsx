import { memo, forwardRef } from 'react';
import { IconLink } from '@tabler/icons';
import { ActionIcon } from '@mantine/core';
import { createLink } from '../utils';

type Props = {
  media: string;
  board: string;
  docId: string;
};

const PostLink = forwardRef((props: Props, ref) => {
  const { media, docId, board, ...rest } = props;
  const href = createLink(media, board, docId);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} {...rest}>
      <ActionIcon component="a" href={href} target="_blank" rel="noopener noreferrer">
        <IconLink size={20} />
      </ActionIcon>
    </div>
  );
});

export default memo(PostLink);
