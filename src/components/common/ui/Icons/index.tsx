import { memo } from 'react';
import { IconControllerProps } from 'types/mantine';
import PttIcon from './Ptt';
import LopenIcon from './Lopen';
import DcardIcon from './Dcard';
import GithubIcon from './Github';
import FacebookIcon from './Facebook';

function IconController(props: IconControllerProps) {
  const { control, ...rest } = props;

  switch (control) {
    case 'ptt':
      return <PttIcon {...rest} />;
    case 'dcard':
      return <DcardIcon {...rest} />;
    case 'facebook':
      return <FacebookIcon {...rest} />;
    case 'github':
      return <GithubIcon {...rest} />;
    case 'lopen':
      return <LopenIcon {...rest} renderType={props.renderType} />;
    default:
      return null;
  }
}

export default memo(IconController);
