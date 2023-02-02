import Link from 'next/link';
import { Text } from '@mantine/core';
import { NestedLinks } from 'types/link';
import { memo, Dispatch, SetStateAction } from 'react';
import useStyles from './NestedLinks.styles';

type Props = {
  links: NestedLinks;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
};

function NestedLinks(props: Props) {
  const { links, active, setActive } = props;
  const { classes, cx } = useStyles();

  return (
    <>
      {links.map(({ link, label }, index) => (
        <Text
          key={`${label}-${index}`}
          className={cx(classes.nestedLink, {
            [classes.linkActive]: link.split('/')[2] === active,
          })}
          component={Link}
          href={link}
          onClick={() => setActive(link.split('/')[2])}
        >
          {label}
        </Text>
      ))}
    </>
  );
}

export default memo(NestedLinks);
