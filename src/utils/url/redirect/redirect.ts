import { useEffect } from 'react';
import { useRouter } from 'next/router';

type RedirectProps = { url: string; from?: string };

function Redirect(props: RedirectProps) {
  const { url, from } = props;
  const router = useRouter();
  const as = from && { pathname: url, query: `redirect=${encodeURIComponent(from)}` };

  useEffect(() => {
    router.push(url, as);
  }, [url, from, router]);

  return null;
}

export default Redirect;
