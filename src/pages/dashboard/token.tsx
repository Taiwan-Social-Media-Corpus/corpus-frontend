import React from 'react';
import API from '@config/api';
import { SWRConfig } from 'swr';
import Route from '@config/routes';
import type { GetServerSideProps } from 'next';
import { NextPageWithControl, FallbackProps } from 'types';
import { fetchAPITokens } from '@services/user/apiToken/read';
import APITokenPage from '@components/pages/User/Dashboard/Token';
import DashboardBase from '@components/pages/User/Dashboard/Base';

const APIToken: NextPageWithControl<FallbackProps> = (props) => (
  <SWRConfig value={{ fallback: props.fallback }}>
    <APITokenPage />
  </SWRConfig>
);

APIToken.control = {
  auth: true,
  Layout: (props) => <DashboardBase title="API Token">{props.children}</DashboardBase>,
};

export default APIToken;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cookie } = context.req.headers;
  const url = API.V1.user.apiToken.external;

  if (cookie === undefined) {
    return { redirect: { permanent: false, destination: Route.login } };
  }

  const apiTokens = await fetchAPITokens(url, cookie);

  if (apiTokens === null || apiTokens.status === 'failed') {
    return { redirect: { permanent: false, destination: Route.serverError } };
  }

  return {
    props: {
      fallback: {
        [url]: apiTokens.data,
      },
    },
  };
};
