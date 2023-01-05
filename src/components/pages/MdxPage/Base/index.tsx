import { memo } from 'react';
import dynamic from 'next/dynamic';
import useStyles from './Base.styles';

const Footer = dynamic(() => import('@components/common/ui/Footer'));

function MdxPageBase({ children }: { children: React.ReactNode }) {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.content}>{children}</div>
      <Footer withNavbar />
    </>
  );
}

export default memo(MdxPageBase);
