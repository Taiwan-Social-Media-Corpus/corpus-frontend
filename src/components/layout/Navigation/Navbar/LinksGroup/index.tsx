import Link from 'next/link';
import { memo, useState, useMemo } from 'react';
import { IconChevronRight } from '@tabler/icons';
import { ThemeIcon, Text, Collapse, UnstyledButton, Group, Box } from '@mantine/core';
import useStyles from './LinksGroup.styles';

type Props = {
  link?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: string;
  links?: { label: string; link: string }[];
};

function useComponent(link: string | undefined, activeStyle: string) {
  const Component: any = link === undefined ? Text : link.startsWith('https') ? 'a' : Link;
  const componentProps =
    link === undefined
      ? null
      : link.startsWith('https')
      ? { href: link }
      : { href: link, activeclassname: activeStyle };

  return [Component, componentProps];
}

function LinksGroup(props: Props) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(true);
  const { link, icon, children, color, links } = props;
  const hasLinks = Array.isArray(links);

  const subItems = useMemo(() => {
    if (!hasLinks) return null;

    return links.map((subLink, index) => (
      <Text
        key={`${subLink.label}-${index}`}
        className={classes.link}
        component={Link}
        href={subLink.link}
      >
        {subLink.label}
      </Text>
    ));
  }, [hasLinks, links]);

  const [Component, componentProps] = useComponent(link, classes.active);

  return (
    <>
      <UnstyledButton onClick={() => setOpened((open) => !open)} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Component className={classes.mainLink} {...componentProps}>
              <ThemeIcon
                size={30}
                sx={(theme) => ({
                  backgroundColor: color,
                  color: theme.white,
                })}
                radius="lg"
              >
                {icon}
              </ThemeIcon>
              <div className={classes.body}>{children}</div>
            </Component>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? 'rotate(90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{subItems}</Collapse> : null}
    </>
  );
}

export default memo(LinksGroup);
