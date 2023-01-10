import { createAsyncThunk } from '@reduxjs/toolkit';

import { postContact, getContacts, removeContact } from 'services/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await getContacts();
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await postContact(contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async idContact => {
    const { data } = await removeContact(idContact);
    return data;
  }
);
