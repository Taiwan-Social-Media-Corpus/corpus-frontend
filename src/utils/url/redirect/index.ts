import { useEffect } from 'react';
import { useRouter, Router } from 'next/router';

type RouterPush = Parameters<Router['push']>;

type RedirectProps = {
  url: RouterPush[0];
  as?: RouterPush[1];
  options?: RouterPush[2];
};

function Redirect(props: RedirectProps) {
  const { url, as, options } = props;
  const router = useRouter();
  useEffect(() => {
    router.push(url, as, options);
  }, [router.pathname]);

  return null;
}

export default Redirect;
