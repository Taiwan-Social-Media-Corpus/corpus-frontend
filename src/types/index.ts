import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

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

export type PageControl = {
  auth?: boolean;
  Layout?: (props: { children?: React.ReactElement }) => JSX.Element;
};

export type NextPageWithControl<P = {}, IP = P> = NextPage<P, IP> & { control?: PageControl };

export type AppPropsWithControl<T = any> = AppProps & {
  Component: NextPageWithControl<T>;
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
