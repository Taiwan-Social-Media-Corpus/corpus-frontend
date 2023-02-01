import { memo } from 'react';
import Link from 'next/link';
import { LinkItem } from 'types/link';
import dynamic from 'next/dynamic';
import { Text } from '@mantine/core';
import useStyles from './NavItem.styles';

const NestedItems = dynamic(() => import('./NestedItems'));

type Props = { links: LinkItem[] };

function NavItems(props: Props) {
  const { classes } = useStyles();
  const { links } = props;

  return (
    <>
      {links.map((link, index) => {
        const key = `${link.label}-${index}`;
        if (link.links) {
          return <NestedItems key={key} link={link} />;
        }

        return (
          <Link href={link.link} key={key} className={classes.link}>
            <Text>{link.label}</Text>
          </Link>
        );
      })}
    </>
  );
}

export default memo(NavItems);
