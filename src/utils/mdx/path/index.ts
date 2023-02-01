import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Fields, MdxFolder } from 'types/mdx';

function getPostsDir(folder: MdxFolder) {
  const dir = `src/components/pages/${folder}`;
  return path.join(process.cwd(), dir);
}

function getPosts(folder: MdxFolder) {
  const dir = getPostsDir(folder);
  return fs.readdirSync(dir).filter((file) => /\.mdx?$/.test(file));
}

function getPostsData(folder: MdxFolder, fields: Fields[] = []) {
  const posts = getPosts(folder);

  return posts.map((filename) => {
    const dir = getPostsDir(folder);
    const filePath = path.join(dir, filename);
    const source = fs.readFileSync(filePath);
    const { data, content } = matter(source);
    const slug = filename.replace(/\.[^.]+$/, '');

    const output: { [key: string]: any } = {};
    if (fields.includes('slug')) {
      output.slug = slug;
    }
    if (fields.includes('frontMatter')) {
      output.frontMatter = data;
    }
    if (fields.includes('content')) {
      output.content = content;
    }

    return output;
  });
}

function sortPosts(posts: { [key: string]: any }[]) {
  return posts.sort((a, b) => a.frontMatter.order - b.frontMatter.order);
}

export { getPostsData, sortPosts };
