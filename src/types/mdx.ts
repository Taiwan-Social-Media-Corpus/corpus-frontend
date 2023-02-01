import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Frontmatter {
  title: string;
  createdAt: string;
  slug: string;
  order: number;
  updatedAt?: string;
}

export type MdxPageProps = {
  post: {
    source: MDXRemoteSerializeResult;
    headings: { depth: number; value: string }[];
  };
  frontMatter: Frontmatter;
  siblings: {
    next: Frontmatter | null;
    prev: Frontmatter | null;
  };
};

export type MdxFolder = 'About' | 'Guide';

export type Fields = 'slug' | 'frontMatter' | 'content';
