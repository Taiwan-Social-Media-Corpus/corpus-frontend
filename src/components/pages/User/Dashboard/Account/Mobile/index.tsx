import Route from '@config/routes';
import { memo, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Tabs, Group } from '@mantine/core';
import { AccountPageProps } from '../types';

function MobileAccountPage(props: AccountPageProps) {
  const { blocks } = props;
  const router = useRouter();

  const tabsList = useMemo(
    () =>
      blocks.map((block, index) => (
        <Tabs.Tab
          key={`${block.name}-${index}`}
          value={block.query}
          icon={<block.icon size={14} />}
        >
          {block.name}
        </Tabs.Tab>
      )),
    [blocks]
  );

  const tabsPanel = useMemo(
    () =>
      blocks.map((block, index) => (
        <Tabs.Panel key={`${block.name}-${index}`} value={block.query} pt="xs">
          {block.content}
        </Tabs.Panel>
      )),
    [blocks]
  );

  return (
    <Group grow sx={{ width: '90%' }}>
      <Tabs
        value={(router.query.tab as string) || 'general'}
        onTabChange={(value) =>
          router.push({ pathname: Route.dashboard.account, query: { tab: value } })
        }
        sx={{
          '@media (min-width: 992px)': {
            display: 'none',
          },
        }}
      >
        <Tabs.List grow>{tabsList}</Tabs.List>
        {tabsPanel}
      </Tabs>
    </Group>
  );
}

export default memo(MobileAccountPage);
