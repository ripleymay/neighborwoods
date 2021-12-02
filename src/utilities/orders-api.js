import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getAll() {
  return sendRequest(`${BASE_URL}/all`);
}