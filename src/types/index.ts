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
  timeout?: number;
};

export interface Response<ResData = {}> {
  status: 'success' | 'failed';
  data: ResData;
  msg?: string;
}
