import { memo } from 'react';
import Link from 'next/link';
import { Text } from '@mantine/core';
import { LinksTypes } from './types';
import NestedItems from './NestedItems';
import useStyles from './NavItem.styles';

function NavItems({ links }: LinksTypes) {
  const { classes } = useStyles();

  return (
    <>
      {links.map((link) => {
        if (link.links) {
          return <NestedItems key={link.label} link={link} />;
        }
        return (
          <Link href={link.link} key={link.label} className={classes.link}>
            <Text>{link.label}</Text>
          </Link>
        );
      })}
    </>
  );
}

export default memo(NavItems);
