import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

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
  headers?: HeadersInit;
};

export interface Response<TData extends Record<string, any> = {}> {
  status: 'success' | 'failed';
  data: TData;
  msg?: string;
}

// -------- helpers --------

export type PickAsOrNull<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: T[P] | null;
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// -------- NextJs --------

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithAuth<T = any> = NextPage<T> & {
  auth?: boolean;
  admin?: boolean;
  hideLayout?: boolean;
};

export type AppPropsWithAuth<T = any> = AppProps & {
  Component: NextPageWithAuth<T>;
};

export type FallbackProps = { fallback: { [x: string]: any } };

// ---- miscellaneous ----

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

export type IconControllerProps =
  | ({ control: 'github' } & IconProps)
  | ({ control: 'facebook' } & IconProps)
  | ({ control: 'no-result' } & IconProps)
  | ({ control: 'lopen' } & IconProps & { renderType: 'footer' | 'header' });
