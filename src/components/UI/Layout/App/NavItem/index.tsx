import { memo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Text } from '@mantine/core';
import { LinksTypes } from './types';
import useStyles from './NavItem.styles';

const NestedItems = dynamic(() => import('./NestedItems'));

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
