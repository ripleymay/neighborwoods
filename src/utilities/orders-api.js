import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getOrders() {
  return sendRequest(`${BASE_URL}/`);
}

export function createOrder({addy, coords, trees}) {
  return sendRequest(`${BASE_URL}/`, 'POST', {addy, coords, trees});
}

export async function getMatchingAddys(addy) {
    return sendRequest(`${BASE_URL}/new/address?address=${addy}`);
}

export async function getLatLng(addy) {
    return sendRequest(`${BASE_URL}/new/latlng?address=${addy}`);
}