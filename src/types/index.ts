import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { DehydratedState } from '@tanstack/react-query';

// ---------- API ----------

export type HTTPMethods =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS'
  | 'HEAD'
  | 'CONNECT'
  | 'TRACE';

export type Request<T> = {
  url: string;
  method: HTTPMethods;
  payload?: T;
  authToken?: string;
  toJson?: boolean;
};

export interface Response<ResData = {}> {
  status: 'success' | 'failed';
  data: ResData;
  msg?: string;
}

// -------- helpers --------

export type PickAsOrNull<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: T[P] | null;
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// -------- NextJs --------

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  dehydratedState: DehydratedState;
};

export type NextPageWithAuth = NextPage & {
  auth?: boolean;
  admin?: boolean;
  hideLayout?: boolean;
};

export type AppPropsWithAuth = AppProps & {
  Component: NextPageWithAuth;
  dehydratedState: DehydratedState;
};

// ---- miscellaneous ----

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

export type IconControllerProps =
  | ({ control: 'github' } & IconProps)
  | ({ control: 'facebook' } & IconProps)
  | ({ control: 'no-result' } & IconProps)
  | ({ control: 'lopen' } & IconProps & { renderType: 'footer' | 'header' });
