import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getOrders() {
  return sendRequest(`${BASE_URL}/`);
}