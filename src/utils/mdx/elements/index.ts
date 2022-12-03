import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import serializeConfig from '@config/mdx';
import { serialize } from 'next-mdx-remote/serialize';

async function getHeadings(content: string) {
  const headingLines = content.split('\n').filter((line) => line.match(/^###*\s/));

  return headingLines.map((raw) => {
    const depth = raw.slice(0, 3) === '###' ? 3 : 2;
    const value = raw.replace(/^###*\s/, '');
    return { depth, value };
  });
}

async function createMdxElements(params: { slug: string }, postsDir: string) {
  const postFilePath = path.join(postsDir, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data: frontMatter } = matter(source);

  const [mdxSource, headings] = await Promise.all([
    await serialize(content, serializeConfig(frontMatter)),
    await getHeadings(content),
  ]);

  return {
    source: mdxSource,
    frontMatter,
    headings,
  };
}

export default createMdxElements;
