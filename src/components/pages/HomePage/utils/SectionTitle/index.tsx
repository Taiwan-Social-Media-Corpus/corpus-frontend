import { memo } from 'react';
import useStyles from './SectionTitle.styles';

interface SectionTitleProps extends React.ComponentProps<'h1'> {
  type?: 'white' | 'default';
}

function SectionTitle(props: SectionTitleProps) {
  const { children, className, type = 'default', ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <h2 className={cx(classes.title, classes[type], className)} {...rest}>
      {children}
    </h2>
  );
}

export default memo(SectionTitle);
