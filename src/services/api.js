import axios from 'axios';
const ENDPOINT = '/contacts-list';

axios.defaults.baseURL = 'https://61c4e654f1af4a0017d9985c.mockapi.io';

export const getContacts = () => axios.get(ENDPOINT);

export const postContact = contact => axios.post(ENDPOINT, contact);

export const removeContact = id => axios.delete(`${ENDPOINT}/${id}`);
