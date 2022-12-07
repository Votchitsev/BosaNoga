import ApiBaseUrl from '../config';

export default function request(url, method, params = null, body = null) {
  let result;

  function addParamsToUrl() {
    let paramsUrl = '?';

    for (let i = 0; i < Object.keys(params).length; i += 1) {
      const key = Object.keys(params)[i];
      paramsUrl += `${key}=${params[key]}`;

      if (i !== Object.keys(params).length - 1) {
        paramsUrl += '&';
      }
    }

    return paramsUrl;
  }

  if (method === 'GET') {
    result = fetch(`${ApiBaseUrl + url}${params !== null ? addParamsToUrl() : ''}`);
  }

  if (method === 'POST') {
    result = fetch(`${ApiBaseUrl + url}${params !== null ? addParamsToUrl() : ''}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }

  return result;
}
