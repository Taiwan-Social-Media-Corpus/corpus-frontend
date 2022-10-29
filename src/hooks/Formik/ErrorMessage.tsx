import { IconAlertCircle } from '@tabler/icons';
import { Group, Text, TextProps } from '@mantine/core';

type Props = { text: string; textProps?: TextProps };

const ErrorMessage = (props: Props) => {
  const { text, textProps } = props;

  return (
    <Group spacing={5} sx={{ position: 'absolute' }}>
      <IconAlertCircle width={18} />
      <Text weight={500} size="sm" {...textProps}>
        {text}
      </Text>
    </Group>
  );
};

export default ErrorMessage;
