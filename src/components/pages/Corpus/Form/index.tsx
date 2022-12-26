import { memo } from 'react';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { Form, Formik, FormikHelpers } from 'formik';
import { Paper, Button, Grid, Group } from '@mantine/core';
import FormikController from '@components/common/ui/Form';
import SelectItem from '@components/common/ui/Form/utils';
import validationSchema from './schema';
import { resetBoardsField } from './utils';
import { FormValues, CorpusFormProps } from './types';
import { mediaOptions, createPostTypeOptions } from './options';

const CURRENT_YEAR = new Date().getFullYear();

function CorpusForm(props: CorpusFormProps) {
  const { boards } = props;
  const router = useRouter();
  const smallScreen = useMediaQuery('(max-width: 575px)');

  const initialValue: FormValues = {
    media: 'all',
    word: '',
    boards: [],
    postType: 'all',
    cqlEnable: false,
    start: CURRENT_YEAR,
    end: CURRENT_YEAR,
    windowSize: 10,
    fetchNumber: 20,
  };

  const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    const {
      media,
      start,
      end,
      windowSize,
      word,
      boards: selectedBoards,
      postType,
      cqlEnable,
      fetchNumber,
    } = values;

    const base64 = window.btoa(
      `m=${media === 'all' ? '' : media}&w=${encodeURI(
        word.replaceAll('&', '%26')
      )}&b=${selectedBoards}&p=${
        postType === 'all' ? '' : postType
      }&c=${cqlEnable}&s=${start}&e=${end}&win=${windowSize}&f=${fetchNumber}`
    );

    const e = encodeURIComponent(base64);
    const pushUrl = `${Route.corpus.concordance}?pos=false&e=${e}`;
    router.push(pushUrl);
    actions.setSubmitting(false);
  };

  return (
    <Paper shadow="md" p={45} radius="md" withBorder>
      <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik) => (
          <Form>
            <Grid justify="center" gutter="xl">
              <Grid.Col xs={12} sm={12} md={12} lg={12}>
                <Group>
                  <FormikController
                    control="select"
                    name="media"
                    label="Media"
                    onChange={resetBoardsField('media', formik)}
                    itemComponent={SelectItem}
                    options={mediaOptions}
                    withAsterisk
                    placeholder="Pick Media"
                  />
                </Group>
              </Grid.Col>

              <Grid.Col xs={8} sm={8} md={8} lg={8}>
                <FormikController control="text-input" name="word" label="Word" withAsterisk />
              </Grid.Col>

              <Grid.Col xs={4} sm={4} md={4} lg={4} mt={smallScreen ? -5 : 28}>
                <FormikController
                  control="switch"
                  name="cqlEnable"
                  label="CQL enable"
                  onLabel="ON"
                  offLabel="OFF"
                  size="md"
                  color="teal"
                />
              </Grid.Col>

              {formik.values.media !== 'all' && formik.values.media !== null && (
                <Grid.Col xs={12} sm={12} md={6} lg={6}>
                  <FormikController
                    control="multi-select"
                    name="boards"
                    label="看版"
                    options={boards[formik.values.media as 'ptt' | 'dcard'].map(
                      (value: string) => ({
                        label: value,
                        value,
                      })
                    )}
                    withAsterisk
                    searchable
                    nothingFound="Nothing found"
                    placeholder="Pick board"
                    clearable
                  />
                </Grid.Col>
              )}

              <Grid.Col
                xs={12}
                sm={12}
                md={formik.values.media === 'all' ? 12 : 6}
                lg={formik.values.media === 'all' ? 12 : 6}
              >
                <FormikController
                  control="select"
                  name="postType"
                  label="搜尋對象"
                  options={createPostTypeOptions(formik.values.media)}
                  withAsterisk
                  placeholder="Pick board"
                />
              </Grid.Col>

              <Grid.Col xs={6} sm={6} md={6} lg={6}>
                <FormikController
                  control="number-input"
                  name="start"
                  label="Start year"
                  withAsterisk
                  min={1}
                  max={CURRENT_YEAR}
                />
              </Grid.Col>
              <Grid.Col xs={6} sm={6} md={6} lg={6}>
                <FormikController
                  control="number-input"
                  name="end"
                  label="End year"
                  withAsterisk
                  min={1}
                  max={CURRENT_YEAR}
                />
              </Grid.Col>

              <Grid.Col xs={6} sm={6} md={6} lg={6}>
                <FormikController
                  control="number-input"
                  name="windowSize"
                  label="視窗大小"
                  withAsterisk
                  min={5}
                  max={30}
                />
              </Grid.Col>

              <Grid.Col xs={6} sm={6} md={6} lg={6}>
                <FormikController
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
                <Button type="submit" loading={formik.isSubmitting} fullWidth>
                  {formik.isSubmitting ? 'Submitting' : 'Submit'}
                </Button>
              </Grid.Col>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}

export default memo(CorpusForm);
