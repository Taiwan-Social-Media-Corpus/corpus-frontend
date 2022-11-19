import { memo } from 'react';
import { FacebookIcon } from '@components/common/Icons';
import HeaderControl from './utils';

interface FacebookControlProps {
  link: string;
}

function Facebook(props: FacebookControlProps) {
  const { link } = props;

  return (
    <HeaderControl
      tooltip="Facebook"
      component="a"
      href={link}
      sx={(theme) => ({
        color: theme.white,
        backgroundColor: '#1778F2',
        borderColor: '#1778F2',
        ...theme.fn.hover({
          backgroundColor: theme.fn.lighten('#1778F2', 0.1),
        }),
      })}
    >
      <FacebookIcon size={22} />
    </HeaderControl>
  );
}

export default memo(Facebook);
