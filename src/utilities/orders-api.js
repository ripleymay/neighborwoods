import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getOrders() {
  return sendRequest(`${BASE_URL}/`);
}

export function getAllOrders() {
  return sendRequest(`${BASE_URL}/all`);
}

export function createOrder({addy, coords, trees}) {
  return sendRequest(`${BASE_URL}/`, 'POST', {addy, coords, trees});
}

export function deleteOrder(orderId) {
  return sendRequest(`${BASE_URL}/${orderId}`, 'DELETE');
}

export function updateStatus(orderId, newStatus) {
  return sendRequest(`${BASE_URL}/${orderId}`, 'PUT', newStatus);
}

export async function getMatchingAddys(addy) {
    return sendRequest(`${BASE_URL}/new/address?address=${addy}`);
}

export async function getLatLng(addy) {
    return sendRequest(`${BASE_URL}/new/latlng?address=${addy}`);
}

export async function checkDupes(addy) {
  return sendRequest(`${BASE_URL}/new/duplicates?address=${addy}`);
}