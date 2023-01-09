import {
  setContactsPending,
  setContactsFulfilled,
  setContactsRejected,
  addContactPending,
  addContactFulfilled,
  addContactRejected,
  removeContactPending,
  removeContactFulfilled,
  removeContactRejected,
} from './contactsSlice';

import { addContact, getContacts, removeContact } from 'services/api';

export const setContacts = () => async dispatch => {
  dispatch(setContactsPending);
  try {
    const contacts = await getContacts();
    dispatch(setContactsFulfilled(contacts));
  } catch (error) {
    dispatch(setContactsRejected(error));
  }
};

export const postContact = contact => async dispatch => {
  dispatch(addContactPending);
  try {
    const contacts = await addContact(contact);
    dispatch(addContactFulfilled(contacts));
  } catch (error) {
    dispatch(addContactRejected(error));
  }
};

export const deleteContact = idContact => async dispatch => {
  dispatch(removeContactPending);
  try {
    const { id } = await removeContact(idContact);
    dispatch(removeContactFulfilled(id));
  } catch (error) {
    dispatch(removeContactRejected(error));
  }
};
