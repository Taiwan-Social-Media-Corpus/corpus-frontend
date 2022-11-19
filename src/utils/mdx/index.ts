import fs from 'fs';
import path from 'path';

type Page = 'about' | 'guide';

const getPostDirPath = (page: Page) =>
  path.join(process.cwd(), `src/components/pages/${page.charAt(0).toUpperCase() + page.slice(1)}`);

const getPostFilesPath = (page: Page) => {
  const postPath = getPostDirPath(page);
  return fs.readdirSync(postPath).filter((file) => /\.mdx?$/.test(file));
};

export { getPostDirPath, getPostFilesPath };
