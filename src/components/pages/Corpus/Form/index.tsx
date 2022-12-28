import { memo } from 'react';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { encodeURL } from '@utils/url/corpus';
import { CorpusFormProps } from 'types/corpus';
import { useMediaQuery } from '@mantine/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import FormController from '@components/common/ui/Form';
import { useForm, FormProvider } from 'react-hook-form';
import { Paper, Button, Grid, Group } from '@mantine/core';
import { SelectItem } from '@components/common/ui/Form/components/utils';
import { FieldValues } from './types';
import validationSchema from './schema';
import { mediaOptions, createPostTypeOptions, createBoardOptions } from './options';

const CURRENT_YEAR = new Date().getFullYear();

function CorpusForm(props: CorpusFormProps) {
  const { boards } = props;
  const router = useRouter();
  const smallScreen = useMediaQuery('(max-width: 575px)');

  const methods = useForm<FieldValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      media: 'all',
      word: '',
      cqlEnable: false,
      boards: [],
      postType: 'all',
      start: CURRENT_YEAR,
      end: CURRENT_YEAR,
      windowSize: 10,
      fetchNumber: 20,
    },
    mode: 'onTouched',
  });
  const mediaValue = methods.watch('media');

  const onSubmit = methods.handleSubmit((data) => {
    const e = encodeURL(data);
    const pushUrl = `${Route.corpus.concordance}?pos=false&e=${e}`;
    router.push(pushUrl);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Paper shadow="md" p={45} radius="md" withBorder>
          <Grid justify="center" gutter="xl">
            <Grid.Col xs={12} sm={12} md={12} lg={12}>
              <Group>
                <FormController
                  control="select"
                  name="media"
                  label="Media"
                  itemComponent={SelectItem}
                  options={mediaOptions}
                  onClick={() => methods.resetField('boards')}
                  placeholder="Pick Media"
                  withAsterisk
                />
              </Group>
            </Grid.Col>

            <Grid.Col xs={8} sm={8} md={8} lg={8}>
              <FormController control="text-input" name="word" label="Word" withAsterisk />
            </Grid.Col>

            <Grid.Col xs={4} sm={4} md={4} lg={4} mt={smallScreen ? -5 : 28}>
              <FormController
                control="switch"
                name="cqlEnable"
                label="CQL enable"
                onLabel="ON"
                offLabel="OFF"
                size="md"
                color="teal"
              />
            </Grid.Col>

            {mediaValue !== 'all' ? (
              <Grid.Col xs={12} sm={12} md={6} lg={6}>
                <FormController
                  control="multi-select"
                  name="boards"
                  label="看版"
                  options={createBoardOptions(boards, mediaValue)}
                  withAsterisk
                  searchable
                  nothingFound="Nothing found"
                  placeholder="Pick board"
                  clearable
                />
              </Grid.Col>
            ) : null}

            <Grid.Col
              xs={12}
              sm={12}
              md={mediaValue === 'all' ? 12 : 6}
              lg={mediaValue === 'all' ? 12 : 6}
            >
              <FormController
                control="select"
                name="postType"
                label="搜尋對象"
                options={createPostTypeOptions(mediaValue)}
                withAsterisk
                placeholder="Pick board"
              />
            </Grid.Col>

            <Grid.Col xs={6} sm={6} md={6} lg={6}>
              <FormController
                control="number-input"
                name="start"
                label="Start year"
                withAsterisk
                min={1}
                max={CURRENT_YEAR}
              />
            </Grid.Col>
            <Grid.Col xs={6} sm={6} md={6} lg={6}>
              <FormController
                control="number-input"
                name="end"
                label="End year"
                withAsterisk
                min={1}
                max={CURRENT_YEAR}
              />
            </Grid.Col>

            <Grid.Col xs={6} sm={6} md={6} lg={6}>
              <FormController
                control="number-input"
                name="windowSize"
                label="視窗大小"
                withAsterisk
                min={5}
                max={30}
              />
            </Grid.Col>
            <Grid.Col xs={6} sm={6} md={6} lg={6}>
              <FormController
                control="number-input"
                name="fetchNumber"
                label="每頁顯示筆數"
                withAsterisk
                min={10}
                step={10}
                max={100}
              />
            </Grid.Col>

            <Grid.Col xs={3.5} sm={2.5} md={2.5} lg={2.5} xl={2.5} mt={10}>
              <Button type="submit" loading={methods.formState.isSubmitting} fullWidth>
                {methods.formState.isSubmitting ? 'Submitting' : 'Submit'}
              </Button>
            </Grid.Col>
          </Grid>
        </Paper>
      </form>
    </FormProvider>
  );
}

export default memo(CorpusForm);
