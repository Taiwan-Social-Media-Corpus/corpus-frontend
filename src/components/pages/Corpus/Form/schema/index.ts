import { z } from 'zod';

const CQL_PATTERN = /^\s*$|[(["'`].*?[)\]"'`]|[|]/;

const validationSchema = z
  .object({
    media: z.string(),
    word: z.string().min(1, { message: 'Required' }),
    cqlEnable: z.boolean(),
    boards: z.string().array().nullable(),
    postType: z.string().min(1, { message: 'Required' }),
    start: z.number().positive(),
    end: z.number().positive(),
    windowSize: z.number().positive().lte(30, { message: 'No greater than 30' }),
    fetchNumber: z.number().positive().lte(100, { message: 'No greater than 100' }),
  })
  .refine(
    (value) => {
      const { start, end } = value;
      return start <= end;
    },
    { message: '起始年份不得晚於結束年份！', path: ['start'] }
  )
  .superRefine((arg, ctx) => {
    const { word, cqlEnable } = arg;
    const shouldDisable = !CQL_PATTERN.test(word) && cqlEnable === true;
    const shouldEnable = CQL_PATTERN.test(word) && cqlEnable === false;

    if (shouldDisable || shouldEnable) {
      const errorMessage = shouldDisable ? 'disable' : 'enable';
      ctx.addIssue({
        code: 'custom',
        message: `please ${errorMessage} cql query`,
        path: ['word'],
      });
    }
  });

export default validationSchema;
