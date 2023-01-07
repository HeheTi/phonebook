import TYPES from './types';

const setContacts = contacts => ({
  type: TYPES.SET,
  payload: contacts,
});

const addContact = contact => ({
  type: TYPES.ADD,
  payload: contact,
});

const removeContact = id => ({
  type: TYPES.REMOVE,
  payload: id,
});

const changeFilter = value => ({
  type: TYPES.FILTER,
  payload: value,
});

export { setContacts, addContact, removeContact, changeFilter };
