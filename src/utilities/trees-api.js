import sendRequest from './send-request';

const BASE_URL = '/api/trees';

export function getAvail() {
  return sendRequest(`${BASE_URL}/`);
}

export function getAll() {
  return sendRequest(`${BASE_URL}/all`);
}

export function toggleAvail(treeId) {
  return sendRequest(`${BASE_URL}/${treeId}/available`, 'PUT');
}

export function update(treeId, info) {
  return sendRequest(`${BASE_URL}/${treeId}`, 'PUT', info);
}