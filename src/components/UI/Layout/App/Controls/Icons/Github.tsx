import { memo } from 'react';
import { GithubIcon } from '@components/UI/Icons';
import HeaderControl from './utils';

interface GithubControlProps {
  link: string;
  tooltip: string;
}

function Github(props: GithubControlProps) {
  const { link, tooltip } = props;

  return (
    <HeaderControl tooltip={tooltip} component="a" href={link}>
      <GithubIcon size={22} />
    </HeaderControl>
  );
}

export default memo(Github);
