import axios from 'axios';

const CONTACTS_ENDPOINT = {
  GET: '/contacts',
  ADD: '/contacts',
  DEL: '/contacts/',
  CHANGE: '/contacts/',
};
export const getContacts = () => axios.get(CONTACTS_ENDPOINT.GET);

export const postContact = contact =>
  axios.post(CONTACTS_ENDPOINT.ADD, contact);

export const removeContact = id => axios.delete(CONTACTS_ENDPOINT.DEL + id);

export const changeContact = (id, contact) =>
  axios.CHANGE(CONTACTS_ENDPOINT.DEL + id, contact);
