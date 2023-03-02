import Head from 'next/head';
import NextImage from 'next/image';
import { MDXComponents } from 'types/mdx';
import { Text, Code } from '@mantine/core';
import Pre from './Pre';
import Image from './Image';
import Table from './Table';
import MdxTitle from './Title';

const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) => <MdxTitle order={order} {...props} />;

const components: MDXComponents = {
  Head,
  NextImage,
  img: Image,
  table: Table,
  pre: Pre,
  h1: h(1),
  h2: h(2),
  h3: h(3),
  h4: h(4),
  h5: h(5),
  h6: h(6),
  code: (props: any) => <Code {...props} />,
  p: (props: any) => {
    const isImg =
      props.children && typeof props.children.props === 'object' && 'src' in props.children.props;
    if (isImg) return <div {...props} style={{ lineHeight: 1.55 }} />;
    return <p {...props} style={{ lineHeight: 1.55 }} />;
  },
  ul: (props: any) => (
    <ul {...props} style={{ lineHeight: 1.65, marginBottom: 20, marginTop: 10 }} />
  ),
  li: (props: any) => <li {...props} style={{ marginTop: 4 }} />,
  a: (props: any) => {
    const isHTTP: string = props.href.startsWith('http') && !props.href.startsWith('/');
    const newTabProps = isHTTP ? { target: '_blank', rel: 'noopener noreferrer' } : undefined;
    const style = { fontSize: 15 };
    return (
      <Text style={style} component="a" variant="link" href={props.href} {...newTabProps}>
        {props.children}
      </Text>
    );
  },
};

export default components;
