import { memo, useMemo } from 'react';
import { useRouter } from 'next/router';
import { decodeURL } from '@utils/url/corpus';
import { IconReportSearch } from '@tabler/icons-react';
import { Group, Text, ThemeIcon, Paper, List, em } from '@mantine/core';
import { ConcordanceParams, ConcordanceRequestBody } from 'types/corpus';
import { HelperButtonProps } from '../../../types';
import useStyles, { ICON_SIZE } from './ReportContent.styles';

type Props = Pick<HelperButtonProps, 'numberofHits'>;

function ReportContent(props: Props) {
  const router = useRouter();
  const { numberofHits } = props;
  const { classes } = useStyles();
  const { e, page } = router.query as ConcordanceParams;
  const payload = decodeURL(e, page) as ConcordanceRequestBody;
  const { word, media, postType, start, end, fetchNumber } = payload;

  const listItems = useMemo(
    () =>
      [
        `資料數：${numberofHits}`,
        `搜索詞：${word}`,
        `媒體：${media === '' ? '全部' : media}`,
        `搜索類別：${postType === '' ? '全部' : postType}`,
        `搜尋年份：${start} - ${end}`,
        `每頁資料數：${fetchNumber}`,
      ].map((value, index) => (
        <List.Item key={`${value}-${index}`}>
          <Text size="md" weight={400}>
            {value}
          </Text>
        </List.Item>
      )),
    [numberofHits, word, media, postType, start, end, fetchNumber]
  );

  return (
    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <IconReportSearch size={34} stroke={1.5} />
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title} mt={em(35)}>
        Search Report
      </Text>

      <Group mt="xs">
        <List size="sm" mt="md" pr={15} spacing={10}>
          {listItems}
        </List>
      </Group>
    </Paper>
  );
}

export default memo(ReportContent);
