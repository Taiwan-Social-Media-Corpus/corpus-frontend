import { memo } from 'react';
import dynamic from 'next/dynamic';
import { Group, Tooltip } from '@mantine/core';

const Github = dynamic(() => import('./Icons').then((module) => module.Github));
const Facebook = dynamic(() => import('./Icons').then((module) => module.Facebook));
const ColorScheme = dynamic(() => import('./Icons').then((module) => module.ColorScheme));

function HeaderControls() {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group
        spacing="xs"
        pr="md"
        sx={(theme) => ({
          [theme.fn.smallerThan('sm')]: {
            display: 'none',
          },
        })}
      >
        <Facebook link="https://www.facebook.com/groups/174362969268953" />
        <Github link="https://github.com/Taiwan-Social-Media-Corpus" tooltip="Source code" />
        <ColorScheme />
      </Group>
    </Tooltip.Group>
  );
}

export default memo(HeaderControls);
