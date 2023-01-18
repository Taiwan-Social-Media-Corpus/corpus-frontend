import { Request } from 'types';

async function request<T>(args: Request<T> & { toJson: false }): Promise<Response>;
async function request<T, ReturnType>(
  args: Request<T> & { toJson?: true; includeApiKey?: true }
): Promise<ReturnType>;
async function request<T, ReturnType>(
  args: Request<T> & { toJson?: boolean; includeApiKey?: boolean }
): Promise<ReturnType | Response> {
  const { url, method, payload, headers, toJson = true, includeApiKey = false } = args;

  const _payload = payload ?? {};
  const body = method !== 'GET' ? JSON.stringify(_payload) : null;
  const _headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  });

  if (includeApiKey) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    if (!API_KEY) {
      throw new Error('API_KEY undefined');
    }

    _headers.append('X-API-KEY', API_KEY);
  }

  const response = await fetch(url, {
    credentials: 'include',
    method,
    body,
    headers: _headers,
  });

  if (toJson) {
    return response.json();
  }

  return response;
}

export default request;
