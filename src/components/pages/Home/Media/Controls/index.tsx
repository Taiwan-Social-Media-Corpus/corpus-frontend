import { memo } from 'react';
import { Media } from 'types/corpus';
import { UnstyledButton, Text, SimpleGrid, Avatar } from '@mantine/core';
import useStyles from './MediaControls.styles';

function MediaControls(props: Media) {
  const { ptt, dcard } = props;
  const { classes } = useStyles();

  const items = [
    {
      title: 'Ptt',
      stats: ptt,
      logoSrc: '/ptt-logo.png',
      href: 'https://www.ptt.cc/bbs/index.html',
    },
    {
      title: 'Dcard',
      stats: dcard,
      logoSrc: '/dcard-logo.png',
      href: 'https://www.dcard.tw/f',
    },
  ].map((value, index) => (
    <UnstyledButton
      component="a"
      href={value.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.control}
      key={`${value.title}-${index}`}
    >
      <Avatar src={value.logoSrc} style={{ height: 80, width: 80 }} />
      <Text mt="md" size="sm" sx={{ whiteSpace: 'nowrap' }}>
        {value.title}
      </Text>
      <Text mt={5} size="md" sx={{ whiteSpace: 'nowrap' }}>
        共 {value.stats} 則貼文
      </Text>
    </UnstyledButton>
  ));

  return (
    <SimpleGrid
      cols={5}
      breakpoints={[
        { maxWidth: 'md', cols: 3 },
        { maxWidth: 'sm', cols: 1 },
      ]}
    >
      {items}
    </SimpleGrid>
  );
}

export default memo(MediaControls);
