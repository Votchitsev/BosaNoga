import ApiBaseUrl from '../config';

export default function request(url, method) {
  let result;

  if (method === 'GET') {
    result = fetch(ApiBaseUrl + url);
  }

  return result;
}
