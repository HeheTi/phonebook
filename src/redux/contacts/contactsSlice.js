import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlerPending = (state, _) => {
  state.isLoading = true;
};

const handlerRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlerPending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: handlerRejected,

    [addContact.pending]: handlerPending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.rejected]: handlerRejected,

    [deleteContact.pending]: handlerPending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const idx = state.items.findIndex(({ id }) => id === payload.id);
      state.items.splice(idx, 1);
    },
    [deleteContact.rejected]: handlerRejected,
  },
});
