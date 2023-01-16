import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons';
import { memo, useState, ReactNode, useMemo } from 'react';
import { Box, Group, Collapse, UnstyledButton, Text, Menu } from '@mantine/core';
import useStyles from './CollapseMenuItem.styles';

type Props = {
  label: string;
  icon: ReactNode;
  links: { label: string; link: string }[];
};

function CollapseMenuItem(props: Props) {
  const { label, icon, links } = props;
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const collapseItems = useMemo(
    () =>
      links.map((value, index) => (
        <Menu.Item key={`${value.label}-${index}`} component={Link} href={value.link}>
          <Text className={classes.link}>{value.label}</Text>
        </Menu.Item>
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
