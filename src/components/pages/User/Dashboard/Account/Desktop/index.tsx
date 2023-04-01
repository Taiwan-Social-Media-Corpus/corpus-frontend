import Route from '@config/routes';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { memo, useMemo, useState, useRef } from 'react';
import { rem, em, Grid, UnstyledButton, Text } from '@mantine/core';
import { AccountPageProps } from '../types';
import useStyles from './DesktopAccountPage.styles';

function DesktopAccountPage(props: AccountPageProps) {
  const { blocks } = props;
  const router = useRouter();
  const { tab } = router.query;
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { classes, theme } = useStyles({ shouldAnimate });
  const animationTimeout = useRef<number>();
  const startIndex = tab === undefined ? 0 : blocks.findIndex((x) => x.query === tab);
  const [active, setActive] = useState(startIndex);
  const controlSize = useMediaQuery(`(max-width: ${em(theme.breakpoints.sm)})`) ? 60 : 80;

  const handleActiveChange = (index: number) => {
    setActive(index);
    if (index !== active) {
      setShouldAnimate(true);
      window.clearTimeout(animationTimeout.current);
      animationTimeout.current = window.setTimeout(() => setShouldAnimate(false), 500);
    }
  };

  const controls = useMemo(
    () =>
      blocks.map((block, index) => (
        <UnstyledButton<'button'>
          key={`${block.name}-${index}`}
          onClick={() => {
            handleActiveChange(index);
            router.push({
              pathname: Route.dashboard.account,
              query: { tab: blocks[index].query },
            });
          }}
          data-active={index === active || undefined}
          className={classes.control}
        >
          <div className={classes.controlInner}>
            <block.icon size={rem(28)} stroke={1.5} className={classes.controlIcon} />
            <div>
              <Text className={classes.controlTitle}>{block.name}</Text>
              <Text color="dimmed" size="sm" className={classes.controlDescription}>
                {block.description}
              </Text>
            </div>
          </div>
        </UnstyledButton>
      )),
    [blocks, active]
  );

  const activeBlock = blocks[active].content;

  return (
    <div className={classes.root}>
      <Grid gutter={0} mt="md">
        <Grid.Col md={4}>
          <div className={classes.controls}>
            <div
              className={classes.controlsIndicator}
              style={{ height: controlSize, transform: `translateY(${rem(controlSize * active)})` }}
            />
            {controls}
          </div>
        </Grid.Col>
        <Grid.Col md={8}>
          <div className={classes.block}>{activeBlock}</div>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default memo(DesktopAccountPage);
