import { memo } from 'react';
import { Media } from 'types/corpus';
import { Space } from '@mantine/core';
import PageSection from '../Base';
import MediaControls from './Controls';

type Props = { media: Media };

function Media(props: Props) {
  const { media } = props;

  return (
    <PageSection
      title="Taiwan Social Media"
      description="We collect ...."
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      })}
    >
      <Space h="xl" />
      <MediaControls dcard={media.dcard} ptt={media.ptt} />
      <Space h="xl" />
    </PageSection>
  );
}

export default memo(Media);
