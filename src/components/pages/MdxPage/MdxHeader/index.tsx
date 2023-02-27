import { Frontmatter } from 'types/mdx';
import { Title, Text } from '@mantine/core';
import useStyles from './MdxHeader.styles';

type Props = { frontMatter: Frontmatter };

function MdxHeader(props: Props) {
  const { frontMatter } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <Title className={classes.title}>{frontMatter.title}</Title>
      <Text size="lg" className={classes.description}>
        發表於 {frontMatter.createdAt}
        {frontMatter.updatedAt !== undefined ? ` | 更新於 ${frontMatter.updatedAt}` : null}
      </Text>
    </div>
  );
}

export default MdxHeader;
