import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function update(userId, info) {
  return sendRequest(`${BASE_URL}/${userId}`, 'PUT', info);
}

export function getAll() {
  return sendRequest(`${BASE_URL}/all`);
}

export function deleteUser(userId) {
  return sendRequest(`${BASE_URL}/${userId}`, 'DELETE');
}