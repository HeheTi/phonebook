import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterReducer } from './filter/filterReducer';
import { contactsSlice } from './contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
const persictConfig = {
  key: 'phonebook-contacts',
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persictConfig, contactsSlice.reducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
