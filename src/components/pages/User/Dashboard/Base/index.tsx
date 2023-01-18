import dynamic from 'next/dynamic';
import { Title } from '@mantine/core';
import { memo, ReactNode } from 'react';
import useStyles from './DashboardBase.styles';

const Footer = dynamic(() => import('@components/common/ui/Footer'));

type Props = {
  title: string;
  children: ReactNode;
};

function DashboardBase(props: Props) {
  const { title, children } = props;
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <Title className={classes.title} sx={{ fontWeight: 900, fontSize: 44 }}>
              {title}
            </Title>
            {children}
          </div>
        </div>
      </div>
      <Footer withNavbar />
    </>
  );
}

export default memo(DashboardBase);
