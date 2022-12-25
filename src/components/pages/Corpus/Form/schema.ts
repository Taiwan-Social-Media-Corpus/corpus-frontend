import { object, string, number, boolean, array } from 'yup';
import { testWord } from './utils';

const validationSchema = object({
  media: string().required('Required').nullable(),
  word: string()
    .required('Required')
    .test('word', 'please disable cql query', testWord('cql'))
    .test('word', 'please enable cql query', testWord('default')),
  cqlEnable: boolean(),
  boards: array().of(string()).required('請至少選擇一個看板').nullable(),
  start: number()
    .required('Required')
    .test('start', '起始年份不得晚於結束年份！', (start, context) => {
      const end = context.parent.end as number;
      if (start && start > end) {
        return false;
      }
      return true;
    }),
  end: number().required('Required'),
  postType: string().required('Required').nullable(),
  windowSize: number().required('Required'),
  fetchNumber: number().required('Required'),
});

export default validationSchema;
