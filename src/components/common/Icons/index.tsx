import { memo } from 'react';
import dynamic from 'next/dynamic';
import { IconControllerProps } from 'types/mantine';

function IconController(props: IconControllerProps) {
  const { control, ...rest } = props;

  switch (control) {
    case 'ptt': {
      const PttIcon = dynamic(() => import('./Ptt'));
      return <PttIcon {...rest} />;
    }
    case 'dcard': {
      const DcardIcon = dynamic(() => import('./Dcard'));
      return <DcardIcon {...rest} />;
    }
    case 'facebook': {
      const FacebookIcon = dynamic(() => import('./Facebook'));
      return <FacebookIcon {...rest} />;
    }
    case 'github': {
      const GithubIcon = dynamic(() => import('./Github'));
      return <GithubIcon {...rest} />;
    }
    case 'lopen': {
      const LopenIcon = dynamic(() => import('./Lopen'));
      return <LopenIcon {...rest} renderType={props.renderType} />;
    }
    default:
      return null;
  }
}

export default memo(IconController);
