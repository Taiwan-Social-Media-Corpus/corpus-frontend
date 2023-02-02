import Link from 'next/link';
import { Text } from '@mantine/core';

function useLinkComponent(link: string | undefined) {
  const Component: any = link === undefined ? Text : link.startsWith('https') ? 'a' : Link;
  const componentProps = link === undefined ? null : { href: link };

  return [Component, componentProps];
}

export default useLinkComponent;
