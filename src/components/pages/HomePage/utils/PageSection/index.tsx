import { memo } from 'react';
import { Container, Text, DefaultProps, Box } from '@mantine/core';
import SectionTitle from '../SectionTitle';
import useStyles from './PageSection.styles';

interface PageSectionProps extends DefaultProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  white?: boolean;
}

function PageSection(props: PageSectionProps) {
  const { title, description, children, white, ...rest } = props;
  const { classes } = useStyles({ white: white as boolean });

  return (
    <Box className={classes.wrapper} {...rest}>
      <Container size={1100}>
        <SectionTitle type={white ? 'white' : 'default'}>{title}</SectionTitle>
        {description && (
          <Text className={classes.description} size="xl">
            {description}
          </Text>
        )}

        {children}
      </Container>
    </Box>
  );
}

export default memo(PageSection);
