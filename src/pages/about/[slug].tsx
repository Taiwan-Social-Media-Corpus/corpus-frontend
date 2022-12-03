import dynamic from 'next/dynamic';
import { MdxPageProps } from 'types';
import createMdxElements from '@utils/mdx/elements';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostDirPath, getPostFilesPath } from '@utils/mdx/path';

const MdxPage = dynamic(() => import('@components/pages/MdxPage'));

function About(props: MdxPageProps) {
  const { source, frontMatter, headings } = props;

  return (
    <article>
      <MdxPage source={source} frontMatter={frontMatter} headings={headings} />
    </article>
  );
}

export default About;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context as { params: { slug: string } };
  const postsDir = getPostDirPath('about');
  const { source, frontMatter, headings } = await createMdxElements(params, postsDir);

  return {
    props: {
      source,
      frontMatter,
      headings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPostFilesPath('about');
  return {
    paths,
    fallback: false,
  };
};
