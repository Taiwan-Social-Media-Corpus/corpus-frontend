import { createPolymorphicComponent } from '@mantine/utils';
import { UnstyledButton, Tooltip, DefaultProps } from '@mantine/core';
import useStyles from './HeaderControl.styles';

interface HeaderControlProps extends DefaultProps {
  tooltip: string;
  children: React.ReactNode;
}

function _HeaderControl({ tooltip, className, ...others }: HeaderControlProps) {
  const { classes, cx } = useStyles();

  return (
    <Tooltip label={tooltip}>
      <UnstyledButton className={cx(classes.control, className)} {...others} />
    </Tooltip>
  );
}

const HeaderControl = createPolymorphicComponent<'button', HeaderControlProps>(_HeaderControl);

export default HeaderControl;
