import { IconAlertCircle } from '@tabler/icons-react';
import { Group, Text, TextProps } from '@mantine/core';

type Props = TextProps & { children?: string };

const ErrorMessage = (props: Props) => {
  const { children, ...rest } = props;
  if (!children?.length) return null;

  return (
    <Group spacing={5} sx={{ position: 'absolute' }}>
      <IconAlertCircle width={18} />
      <Text weight={500} size="sm" {...rest}>
        {children}
      </Text>
    </Group>
  );
};

export default ErrorMessage;
