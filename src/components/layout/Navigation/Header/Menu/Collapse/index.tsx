import Link from 'next/link';
import { NestedLinks } from 'types';
import { IconChevronRight } from '@tabler/icons';
import { memo, useState, ReactNode, useMemo } from 'react';
import { Box, Group, Collapse, UnstyledButton, Text, Menu } from '@mantine/core';
import useStyles from './CollapseMenuItem.styles';

type Props = {
  label: string;
  icon: ReactNode;
  links: NestedLinks;
};

function CollapseMenuItem(props: Props) {
  const { label, icon, links } = props;
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const collapseItems = useMemo(
    () =>
      links.map((value, index) => (
        <Text className={classes.link} key={`${value.label}-${index}`}>
          <Menu.Item component={Link} href={value.link}>
            {value.label}
          </Menu.Item>
        </Text>
      )),
    [links]
  );

  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing.xs,
      })}
    >
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group position="apart">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            <Box ml={9}>{label}</Box>
          </Box>
          <IconChevronRight
            className={classes.chevron}
            size={14}
            stroke={1.5}
            style={{
              transform: opened ? 'rotate(90deg)' : 'none',
            }}
          />
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>{collapseItems}</Collapse>
    </Box>
  );
}

export default memo(CollapseMenuItem);
