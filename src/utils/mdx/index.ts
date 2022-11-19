import path from 'path';

type Page = 'about' | 'guide';

const getPostDirPath = (page: Page) =>
  path.join(process.cwd(), `src/components/pages/${page.charAt(0).toUpperCase() + page.slice(1)}`);

export default getPostDirPath;
