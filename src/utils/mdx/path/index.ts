import fs from 'fs';
import path from 'path';

type Folder = 'about' | 'guide';

function getPostDirPath(folder: Folder) {
  return path.join(
    process.cwd(),
    `src/components/pages/${folder.charAt(0).toUpperCase() + folder.slice(1)}`
  );
}

function getPostSlug(folder: Folder) {
  const dirPath = getPostDirPath(folder);
  const postsPath = fs.readdirSync(dirPath).filter((file) => /\.mdx?$/.test(file));

  return postsPath
    .map((filePath) => filePath.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));
}

export { getPostDirPath, getPostSlug };
