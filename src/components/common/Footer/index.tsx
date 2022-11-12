import dynamic from 'next/dynamic';
import { memo, useMemo } from 'react';
import { MantineLogo } from '@mantine/ds';
import { Container, Text, Group } from '@mantine/core';
import useStyles from './Footer.styles';
import { FOOTER_LINKS_DATA } from './LinksGroup';

const LinksGroup = dynamic(() => import('./LinksGroup').then((module) => module.LinksGroup));
const FacebookButton = dynamic(() =>
  import('@components/common/SocialButtons').then((module) => module.FacebookButton)
);
const GithubButton = dynamic(() =>
  import('@components/common/SocialButtons').then((module) => module.GithubButton)
);

type Props = { withNavbar?: boolean };

function Footer(props: Props) {
  const { withNavbar } = props;
  const { classes, cx } = useStyles();
  const groups = useMemo(
    () =>
      FOOTER_LINKS_DATA.map((group, index) => (
        <LinksGroup key={`${group.title}-${index}`} data={group.data} title={group.title} />
      )),
    [FOOTER_LINKS_DATA]
  );

  return (
    <>
      <div className={classes.spacer} />
      <div className={cx(classes.wrapper, { [classes.withNavbar]: withNavbar })}>
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <MantineLogo size={28} />
              <Text className={classes.description} size="sm">
                Build fully functional accessible corpus faster than ever
              </Text>
            </div>

            <div className={classes.groups}>{groups}</div>
          </div>

          <div className={classes.afterFooter}>
            <Group position="apart">
              <Text size="xs" className={classes.afterFooterNote}>
                Built by <a href="https://github.com/Retr0327">Lixing Yang</a>
              </Text>
              <div className={classes.social}>
                <FacebookButton className={classes.socialButton} />
                <GithubButton className={classes.socialButton} ml="md" />
              </div>
            </Group>
          </div>
        </Container>
      </div>
    </>
  );
}

export default memo(Footer);
