import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Folder = 'about' | 'guide';

function getPostDirPath(folder: Folder) {
  return path.join(
    process.cwd(),
    `src/components/pages/${folder.charAt(0).toUpperCase() + folder.slice(1)}`
  );
}

function getSortedPosts(folder: Folder) {
  const dirPath = getPostDirPath(folder);
  const posts = fs.readdirSync(dirPath).map((filename) => ({
    filename,
  }));

  return posts
    .map(({ filename }) => {
      const filePath = path.join(dirPath, filename);
      const source = fs.readFileSync(filePath);
      const { content, data } = matter(source);

      return {
        content,
        frontMatter: data,
      };
    })
    .sort((a, b) => a.frontMatter.order - b.frontMatter.order);
}

function getPostSlug(folder: Folder) {
  const dirPath = getPostDirPath(folder);
  const postsPath = fs.readdirSync(dirPath).filter((file) => /\.mdx?$/.test(file));

  return postsPath
    .map((filePath) => filePath.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));
}

export { getPostDirPath, getPostSlug, getSortedPosts };
