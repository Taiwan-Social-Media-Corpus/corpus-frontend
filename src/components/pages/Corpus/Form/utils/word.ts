import { TestContext } from 'yup';

type Context = TestContext<{
  [x: string]: any;
}>;

const testWord = (testType: 'default' | 'cql') => (word: string | undefined, context: Context) => {
  const cqlEnable = context.parent.cqlEnable as boolean;
  const cqlSyntax = /^\s*$|[(["'`].*?[)\]"'`]|[|]/g;

  if (word) {
    const invalidSyntax =
      testType === 'cql'
        ? cqlEnable === true && !cqlSyntax.test(word)
        : cqlEnable === false && cqlSyntax.test(word);

    if (invalidSyntax) return false;
  }

  return true;
};

export default testWord;
