import { memo } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { UnstyledButton, Text, Group, DefaultProps, ActionIcon } from '@mantine/core';
import useStyles from './SearchControl.styles';

interface SearchControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  onClick(): void;
}

type Props = SearchControlProps & { control: 'input' | 'icon' };

function SearchControl(props: Props) {
  const { control, className, ...searchProps } = props;

  switch (control) {
    case 'icon':
      return (
        <ActionIcon
          sx={(theme) => ({
            [theme.fn.largerThan('sm')]: {
              display: 'none',
            },
          })}
          {...searchProps}
        >
          <IconSearch size={14} stroke={1.5} />
        </ActionIcon>
      );
    default: {
      const { classes, cx } = useStyles();
      return (
        <UnstyledButton {...searchProps} className={cx(classes.root, className)}>
          <Group spacing="xs">
            <IconSearch size={14} stroke={1.5} />
            <Text size="sm" color="dimmed" pr={80}>
              Search
            </Text>
          </Group>
        </UnstyledButton>
      );
    }
  }
}

export default memo(SearchControl);
