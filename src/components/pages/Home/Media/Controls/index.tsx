import { Media } from 'types/corpus';
import { memo, useMemo } from 'react';
import IconController from '@components/common/ui/Icons';
import { UnstyledButton, Text, SimpleGrid } from '@mantine/core';
import useStyles from './MediaControls.styles';

function MediaControls(props: Media) {
  const { ptt, dcard } = props;
  const { classes } = useStyles();

  const items = useMemo(
    () =>
      [
        {
          title: 'Ptt',
          stats: ptt,
          icon: <IconController control="ptt" height={70} />,
          href: 'https://www.ptt.cc/bbs/index.html',
        },
        {
          title: 'Dcard',
          stats: dcard,
          icon: <IconController control="dcard" height={70} />,
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
          {value.icon}
          <Text mt="md" size="sm" sx={{ whiteSpace: 'nowrap' }}>
            {value.title}
          </Text>
          <Text mt={5} size="md" sx={{ whiteSpace: 'nowrap' }}>
            共 {value.stats} 則貼文
          </Text>
        </UnstyledButton>
      )),
    [ptt, dcard]
  );

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
