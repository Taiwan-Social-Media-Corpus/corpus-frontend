import Link from 'next/link';
import { useMemo } from 'react';
import Route from '@config/routes';
import { Container, Text, Group } from '@mantine/core';
import IconController from '@components/common/ui/Icons';
import useStyles from './Footer.styles';
import LinksGroup, { links } from './LinksGroup';
import { GithubButton, FacebookButton } from './SocialButtons';

type Props = { withNavbar?: boolean };

function Footer(props: Props) {
  const { withNavbar } = props;
  const { classes, cx } = useStyles();
  const groups = useMemo(
    () =>
      links.map((group, index) => (
        <LinksGroup key={`${group.title}-${index}`} data={group.data} title={group.title} />
      )),
    [links]
  );

  return (
    <>
      <div className={classes.spacer} />
      <div className={cx(classes.wrapper, { [classes.withNavbar]: withNavbar })}>
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Group>
                <Link href={Route.home}>
                  <IconController control="lopen" size={80} renderType="footer" />
                </Link>
                <Text
                  component={Link}
                  href={Route.home}
                  ff="Monaco,Courier,monospace"
                  size="md"
                  weight={600}
                >
                  LOPEN
                </Text>
              </Group>
              <Text className={classes.description} size="sm">
                Build fully functional accessible corpus faster than ever
              </Text>
            </div>

            <div className={classes.groups}>{groups}</div>
          </div>

          <div className={classes.afterFooter}>
            <Group position="apart">
              <Text size="xs" className={classes.afterFooterNote}>
                Built by <a href="https://github.com/Retr0327">Lixing Yang</a> and{' '}
                <a href="https://github.com/loperntu">Shu-Kai Hsieh</a>
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

export default Footer;
