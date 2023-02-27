import { memo, useMemo } from 'react';
import { DocInfos } from 'types/corpus';
import { IconDeviceAnalytics } from '@tabler/icons-react';
import { HoverCard, ActionIcon, Avatar, Text, Group, Anchor, Stack, List } from '@mantine/core';
import PostLink from './Link';
import { getBoard, createLink } from './utils';

type Props = {
  docInfos: DocInfos;
  docPid: string;
};

function MediaCard(props: Props) {
  const { docPid, docInfos } = props;
  const { author, board, docId, media, year, title } = docInfos[docPid];
  const href = createLink(media[0], board[0], docId[0]);

  const listItems = useMemo(
    () =>
      [
        `board: ${getBoard(media[0], board[0])}`,
        `title: ${title === undefined ? '無' : title[0]}`,
        `author: ${author === undefined ? '無' : author[0]}`,
        `year: ${year[0]}`,
      ].map((value, index) => <List.Item key={`${value}-${index}`}>{value}</List.Item>),
    [media, board, title, author, year]
  );

  return (
    <HoverCard width={405} shadow="md" withArrow openDelay={200} closeDelay={400} withinPortal>
      <HoverCard.Target>
        <PostLink media={media[0]} docId={docId[0]} board={board[0]} />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Group position="apart">
          <Group>
            <Avatar src={`../${media}-logo.png`} radius="xl" />
            <Stack spacing={7}>
              <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                {`${media[0].charAt(0).toUpperCase()}${media[0].slice(1)}`}
              </Text>
              <Anchor href={href} color="dimmed" size="xs" sx={{ lineHeight: 1 }} target="_blank">
                {href.replace('https://www.', '')}
              </Anchor>
            </Stack>
          </Group>

          <ActionIcon>
            <IconDeviceAnalytics size={20} stroke={1.5} />
          </ActionIcon>
        </Group>
        <List size="sm" mt="md" pr={15}>
          {listItems}
        </List>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export default memo(MediaCard);
