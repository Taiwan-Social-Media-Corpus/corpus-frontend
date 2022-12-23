import Link from 'next/link';
import { Text } from '@mantine/core';
import { memo, useMemo } from 'react';
import links from './links';
import { LinksGroupProps } from './types';
import useStyles from './LinksGroup.styles';

function LinksGroup(props: LinksGroupProps) {
  const { data, title } = props;
  const { classes } = useStyles();

  const items = useMemo(
    () =>
      data.map((link, index) => (
        <Text<any>
          key={`${link.label}-${index}`}
          className={classes.link}
          component={Link}
          href={link.link}
        >
          {link.label}
        </Text>
      )),
    [data]
  );

  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>{title}</Text>
      {items}
    </div>
  );
}

export default memo(LinksGroup);
export { links };
