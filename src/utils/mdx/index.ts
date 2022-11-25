import fs from 'fs';
import path from 'path';

type Page = 'about' | 'guide';

const getPostDirPath = (page: Page) =>
  path.join(process.cwd(), `src/components/pages/${page.charAt(0).toUpperCase() + page.slice(1)}`);

const getPostFilesPath = (page: Page) => {
  const postPath = getPostDirPath(page);
  return fs.readdirSync(postPath).filter((file) => /\.mdx?$/.test(file));
};

async function getHeadings(content: string) {
  const headingLines = content.split('\n').filter((line) => line.match(/^###*\s/));

  return headingLines.map((raw) => {
    const value = raw.replace(/^###*\s/, '');
    const depth = raw.slice(0, 3) === '###' ? 3 : 2;
    return { value, depth };
  });
}

export { getPostDirPath, getPostFilesPath, getHeadings };
