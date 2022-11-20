import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import { SerializeOptions } from 'next-mdx-remote/dist/types';

const serializeConfig = (data: { [key: string]: any }): SerializeOptions => ({
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeCodeTitles],
    format: 'mdx',
  },
  scope: data,
});

export default serializeConfig;
