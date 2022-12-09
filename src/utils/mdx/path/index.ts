import fs from 'fs';
import path from 'path';

type Page = 'about' | 'guide';

const getPostDirPath = (page: Page) =>
  path.join(process.cwd(), `src/components/pages/${page.charAt(0).toUpperCase() + page.slice(1)}`);

const getPostDir = (page: Page) => {
  const postPath = getPostDirPath(page);
  const postFilePaths = fs.readdirSync(postPath).filter((file) => /\.mdx?$/.test(file));

  return postFilePaths
    .map((filePath) => filePath.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));
};

export { getPostDirPath, getPostDir };
