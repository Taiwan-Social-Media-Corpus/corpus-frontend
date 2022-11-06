import { memo, forwardRef } from 'react';
import { IconLink } from '@tabler/icons';
import { HoverCard, ActionIcon, Avatar, Text, Group, Anchor, Stack, List } from '@mantine/core';
import { PostLinkProps, MediaCardProps } from './types';
import { getBoard, createLink } from '../utils/board';

const PostLink = forwardRef((props: PostLinkProps, ref) => {
  const { media, docId, board, ...rest } = props;

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} {...rest}>
      <ActionIcon
        component="a"
        href={createLink(props.media, props.docId, props.board)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconLink />
      </ActionIcon>
    </div>
  );
});

function MediaCard(props: MediaCardProps) {
  const { title, author, board, docId, media, year, dataNumber } = props;
  const href = createLink(media, docId, board);

  return (
    <HoverCard
      width={400}
      shadow="md"
      withArrow
      openDelay={200}
      closeDelay={400}
      position={dataNumber <= 5 ? 'right' : 'top'}
    >
      <HoverCard.Target>
        <PostLink media={media} docId={docId} board={board} />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Group>
          <Avatar src={`../${media}-logo.png`} radius="xl" />
          <Stack spacing={5}>
            <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
              {`${media.charAt(0).toUpperCase()}${media.slice(1)}`}
            </Text>
            <Anchor href={href} color="dimmed" size="xs" sx={{ lineHeight: 1 }}>
              {href.replace('https://www.', '')}
            </Anchor>
          </Stack>
        </Group>
        <List size="sm" mt="md" pr={15}>
          {[
            `board: ${getBoard(media, board)}`,
            `title: ${title}`,
            `author: ${author}`,
            `year: ${year}`,
          ].map((value, index) => (
            <List.Item key={`${value}-${index}`}>{value}</List.Item>
          ))}
        </List>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export default memo(MediaCard);
