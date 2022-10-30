import { Request } from 'types';

async function request<T>({ url, method, payload, timeout = 5 * 1000 }: Request<T>) {
  const _payload = payload ?? {};
  const body = method !== 'GET' ? JSON.stringify(_payload) : null;
  const _headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  // Request Timeout
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(url, {
    credentials: 'include',
    method,
    body,
    headers: _headers,
    signal: controller.signal,
  });

  clearTimeout(id);

  return response.json();
}

export default request;
