import sendRequest from './send-request';

const BASE_URL = '/api/trees';

export function getAvail() {
  return sendRequest(`${BASE_URL}/`);
}

export function getAll() {
  return sendRequest(`${BASE_URL}/all`);
}