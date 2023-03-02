import { Box } from '@mantine/core';
import { MdxLayoutProps } from 'types/mdx';
import { MDXRemote } from 'next-mdx-remote';
import Footer from '@components/common/ui/Footer';
import MdxHeader from './MdxHeader';
import components from './Components';
import MdxSiblings from './MdxSiblings';
import useStyles from './MdxLayout.styles';
import TableOfContents from './TableOfContents';

function _MdxLayout(props: MdxLayoutProps) {
  const { post, siblings, frontMatter } = props;
  const { classes } = useStyles();
  const { source, headings } = post;

  return (
    <>
      <Box className={classes.wrapper}>
        <Box className={classes.container}>
          <Box className={classes.content}>
            <MdxHeader frontMatter={frontMatter} />
            <MDXRemote {...source} components={components} lazy />
            <MdxSiblings siblings={siblings} />
          </Box>

          <Box className={classes.tableOfContents}>
            <TableOfContents headings={headings} />
          </Box>
        </Box>
      </Box>
      <Footer withNavbar />
    </>
  );
}

type Props = {
  children: React.ReactElement<MdxLayoutProps>;
};

function MdxLayout(props: Props) {
  const { children } = props;

  return <_MdxLayout {...children.props} />;
}

export default MdxLayout;
