import { packSx } from '@mantine/utils';
import layoutConfig from '@config/layout';
import IconController from '@components/common/ui/Icons';
import ButtonBase from './Base';
import { SocialButtonProps } from './types';

function FacebookButton(props: SocialButtonProps) {
  const { sx, ...others } = props;

  return (
    <ButtonBase
      sx={[
        (theme) => ({
          backgroundColor: layoutConfig.facebook.color,
          ...theme.fn.hover({
            backgroundColor: theme.fn.lighten(layoutConfig.facebook.color, 0.1),
          }),
        }),
        ...packSx(sx),
      ]}
      icon={<IconController control="facebook" size={16} />}
      href={layoutConfig.facebook.link}
      {...others}
    >
      Follow Corpus on Facebook
    </ButtonBase>
  );
}

function GithubButton(props: SocialButtonProps) {
  const { sx, ...others } = props;

  return (
    <ButtonBase
      sx={[
        (theme) => ({
          backgroundColor: '#000',
          ...theme.fn.hover({
            backgroundColor: theme.fn.lighten('#000', theme.colorScheme === 'dark' ? 0.05 : 0.1),
          }),
        }),
        ...packSx(sx),
      ]}
      icon={<IconController control="github" size={16} />}
      href={layoutConfig.github.organization}
      {...others}
    >
      Follow Corpus on Github
    </ButtonBase>
  );
}

export { FacebookButton, GithubButton };
