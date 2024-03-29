import { Prism } from '@mantine/prism';

function Pre(props: any) {
  const matches = (props.children.props.className || '').match(/language-(?<lang>.*)/);

  return (
    <Prism
      language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
      mb={20}
    >
      {props.children.props.children}
    </Prism>
  );
}

export default Pre;
