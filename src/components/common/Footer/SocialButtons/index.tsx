import meta from 'meta';
import { packSx } from '@mantine/utils';
import { FacebookIcon, GithubIcon } from '@components/common/Icons';
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

function GithubButton(props: SocialButtonProps) {
  const { sx, ...others } = props;

  return (
    <SocialButton
      sx={[
        (theme) => ({
          backgroundColor: '#000',
          ...theme.fn.hover({
            backgroundColor: theme.fn.lighten('#000', theme.colorScheme === 'dark' ? 0.05 : 0.1),
          }),
        }),
        ...packSx(sx),
      ]}
      icon={<GithubIcon size={16} />}
      href={meta.github.organization}
      {...others}
    >
      Follow Corpus on Github
    </SocialButton>
  );
}

export { FacebookButton, GithubButton };
