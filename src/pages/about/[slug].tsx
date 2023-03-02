import dynamic from 'next/dynamic';
import { NextPageWithControl } from 'types';
import { getPostsData } from '@utils/mdx/path';
import createMdxElements from '@utils/mdx/elements';
import type { GetStaticPaths, GetStaticProps } from 'next';

const MdxLayout = dynamic(() => import('@components/layout/Mdx'));

const About: NextPageWithControl = () => null;

export default About;

About.control = {
  Layout: (props) => (
    <article>
      <MdxLayout>{props.children!}</MdxLayout>
    </article>
  ),
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as { params: { slug: string } };
  const { post, frontMatter, siblings } = await createMdxElements(params, 'About');

  return {
    props: {
      post,
      frontMatter,
      siblings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getPostsData('About', ['slug']);
  const paths = posts.map((filename) => ({ params: { slug: filename.slug } }));

  return {
    paths,
    fallback: false,
  };
};
