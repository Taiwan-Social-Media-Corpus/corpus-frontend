import { MdxPageProps } from 'types/mdx';
import { getPostsData } from '@utils/mdx/path';
import MdxPage from '@components/pages/MdxPage';
import createMdxElements from '@utils/mdx/elements';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const About: NextPage<MdxPageProps> = (props) => (
  <article>
    <MdxPage {...props} />
  </article>
);

export default About;

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
