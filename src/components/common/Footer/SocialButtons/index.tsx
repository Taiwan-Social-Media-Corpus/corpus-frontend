import meta from 'meta';
import { packSx } from '@mantine/utils';
import { FacebookIcon } from '@components/common/Icons';
import SocialButton from './Button';
import { SocialButtonProps } from './types';

function FacebookButton(props: SocialButtonProps) {
  const { sx, ...others } = props;

  return (
    <SocialButton
      sx={[
        (theme) => ({
          backgroundColor: meta.facebook.color,
          ...theme.fn.hover({ backgroundColor: theme.fn.lighten(meta.facebook.color, 0.1) }),
        }),
        ...packSx(sx),
      ]}
      icon={<FacebookIcon size={16} />}
      href={meta.facebook.link}
      {...others}
    >
      Follow Corpus on Facebook
    </SocialButton>
  );
}

export default FacebookButton;
