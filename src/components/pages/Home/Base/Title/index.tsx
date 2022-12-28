import { memo } from 'react';
import useStyles from './Title.styles';

interface Props extends React.ComponentProps<'h1'> {
  type?: 'white' | 'default';
}

function SectionTitle(props: Props) {
  const { children, className, type = 'default', ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <h2 className={cx(classes.title, classes[type], className)} {...rest}>
      {children}
    </h2>
  );
}

export default memo(SectionTitle);
