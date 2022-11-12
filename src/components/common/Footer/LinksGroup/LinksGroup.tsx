import { memo, useMemo } from 'react';
import Link from 'next/link';
import { Text } from '@mantine/core';
import { LinksGroupProps } from './types';
import useStyles from './LinksGroup.styles';

function LinksGroup(props: LinksGroupProps) {
  const { data, title } = props;
  const { classes } = useStyles();

  const links = useMemo(
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
      {links}
    </div>
  );
}

export default memo(LinksGroup);
