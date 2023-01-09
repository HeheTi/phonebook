import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContactsPending(state, _) {
      state.isLoading = true;
    },
    setContactsFulfilled(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    setContactsRejected(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    addContactPending(state, _) {
      state.isLoading = true;
    },
    addContactFulfilled(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    addContactRejected(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    removeContactPending(state, _) {
      state.isLoading = true;
    },
    removeContactFulfilled(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const idx = state.items.findIndex(({ id }) => id === payload);
      state.items.splice(idx, 1);
    },
    removeContactRejected(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  setContactsPending,
  setContactsFulfilled,
  setContactsRejected,
  addContactPending,
  addContactFulfilled,
  addContactRejected,
  removeContactPending,
  removeContactFulfilled,
  removeContactRejected,
} = contactsSlice.actions;
