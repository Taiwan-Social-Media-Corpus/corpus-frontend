import { memo } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

const ErrorPage = dynamic(() => import('@components/pages/Error'));

function ServerError() {
  const router = useRouter();

  return (
    <ErrorPage
      code={500}
      title="Something bad just happened..."
      description="Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page."
      button={
        <Button variant="outline" size="md" onClick={() => router.reload()}>
          Refresh the page
        </Button>
      }
    />
  );
}

export default memo(ServerError);
