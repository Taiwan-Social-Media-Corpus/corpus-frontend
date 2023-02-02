import { NavbarLink } from 'types/link';
import { IconChevronRight } from '@tabler/icons';
import { memo, useState, useMemo, Dispatch, SetStateAction } from 'react';
import { UnstyledButton, Group, Box, ThemeIcon, Collapse } from '@mantine/core';
import useLinkComponent from './utils';
import NestedLinks from './NestedLinks';
import useStyles from './LinksGroup.styles';

type Props = NavbarLink & {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
};

function LinksGroup(props: Props) {
  const { link, label, color, icon: LinkIcon, links, active, setActive } = props;
  const { classes, cx } = useStyles();
  const [opened, setOpened] = useState(true);
  const hasLinks = link === undefined && Array.isArray(links);
  const [Component, componentProps] = useLinkComponent(link);
  const collapse = useMemo(
    () =>
      hasLinks ? (
        <Collapse in={opened}>
          <NestedLinks links={links} active={active} setActive={setActive} />
        </Collapse>
      ) : null,
    [hasLinks, links, opened, active]
  );

  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (link !== undefined) {
            setActive(link.split('/')[2]);
          }
          setOpened((open) => !open);
        }}
        className={cx(classes.link, {
          [classes.linkActive]: link !== undefined ? link.split('/')[2] === active : false,
        })}
        component={Component}
        {...componentProps}
      >
        <Group position="apart" style={{ width: '100%' }}>
          <Box className={classes.linkInner}>
            <ThemeIcon
              size={30}
              sx={(theme) => ({
                backgroundColor: color,
                color: theme.white,
              })}
              className={classes.linkIcon}
              radius="lg"
            >
              <LinkIcon size={20} stroke={1.5} />
            </ThemeIcon>
            <span>{label}</span>
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
      {collapse}
    </>
  );
}

export default memo(LinksGroup);
