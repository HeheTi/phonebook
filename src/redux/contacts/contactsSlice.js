import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts(state, action) {
      state.items = action.payload;
    },
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: obj => {
        const id = nanoid();
        return { payload: { id, ...obj } };
      },
    },
    removeContact(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
});

export const { setContacts, addContact, removeContact } = contactsSlice.actions;
