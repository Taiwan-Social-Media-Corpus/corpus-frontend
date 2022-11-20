import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import { SerializeOptions } from 'next-mdx-remote/dist/types';

const serializeConfig = (data: { [key: string]: any }): SerializeOptions => ({
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeCodeTitles, rehypePrism],
    format: 'mdx',
  },
  scope: data,
});

export default serializeConfig;
