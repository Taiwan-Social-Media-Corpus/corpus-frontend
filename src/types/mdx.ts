import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Frontmatter {
  title: string;
  createdAt: string;
  slug: string;
  order: number;
  updatedAt?: string;
}

export type MdxLayoutProps = {
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

type FunctionComponent<Props> = (props: Props) => JSX.Element | null;
type ClassComponent<Props> = new (props: Props) => JSX.ElementClass;
type Component<Props> = FunctionComponent<Props> | ClassComponent<Props>;

interface NestedMDXComponents {
  [key: string]: NestedMDXComponents | Component<any> | keyof JSX.IntrinsicElements;
}

export type MDXComponents = NestedMDXComponents & {
  [Key in keyof JSX.IntrinsicElements]?:
    | Component<JSX.IntrinsicElements[Key]>
    | keyof JSX.IntrinsicElements;
};
