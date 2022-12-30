import {
  DefaultMantineColor,
  Alert as MantineAlert,
  AlertProps as MantineAlertProps,
} from '@mantine/core';
import { Optional } from 'types';
import { useColorScheme } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons';

type Props = { content: string; type: string } & Optional<MantineAlertProps, 'children'>;

function generateColor(type: string): DefaultMantineColor {
  switch (type) {
    case 'alert':
      return 'red';
    case 'warning':
      return 'yellow';
    default:
      return 'cyan';
  }
}

function Alert(props: Props) {
  const { content, type, icon, ...rest } = props;
  const color = generateColor(type);
  const colorScheme = useColorScheme();
  const variant = colorScheme === 'dark' ? 'light' : 'outline';

  return (
    <MantineAlert
      icon={icon || <IconAlertCircle size={16} />}
      color={color}
      variant={variant}
      withCloseButton
      closeButtonLabel="close"
      {...rest}
    >
      {content}
    </MantineAlert>
  );
}

export default Alert;
