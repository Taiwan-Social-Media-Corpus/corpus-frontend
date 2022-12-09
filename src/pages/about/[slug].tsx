import { MdxPageProps } from 'types';
import { getPostSlug } from '@utils/mdx/path';
import MdxPage from '@components/pages/MdxPage';
import createMdxElements from '@utils/mdx/elements';
import { GetStaticPaths, GetStaticProps } from 'next';

function About(props: MdxPageProps) {
  const { post, frontMatter, siblings } = props;

  return (
    <article>
      <MdxPage post={post} frontMatter={frontMatter} siblings={siblings} />
    </article>
  );
}

export default About;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as { params: { slug: string } };
  const { post, frontMatter, siblings } = await createMdxElements(params, 'about');

  return {
    props: {
      post,
      frontMatter,
      siblings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPostSlug('about');

  return {
    paths,
    fallback: false,
  };
};
