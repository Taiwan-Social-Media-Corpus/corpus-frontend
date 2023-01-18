import { memo } from 'react';
import Route from '@config/routes';
import { Group } from '@mantine/core';
import { useRouter } from 'next/router';
import Loader from '@components/common/ui/Loader';
import { useAPITokens } from '@services/user/apiToken/read';
import Table from './Table';
import RequestButton from './RequestButton';

function APITokenPage() {
  const { apiTokens, isLoading, error } = useAPITokens();
  const router = useRouter();

  if (isLoading) return <Loader />;

  if (apiTokens === undefined || error) {
    router.push(Route.serverError, { pathname: router.pathname });
    return null;
  }

  return (
    <Group>
      <RequestButton />
      <Table data={apiTokens} />
    </Group>
  );
}

export default memo(APITokenPage);
