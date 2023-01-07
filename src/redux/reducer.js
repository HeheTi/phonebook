import { combineReducers } from 'redux';
import TYPES from './types';

// const initialStateContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
const initialStateContacts = [];

const contactsReducer = (state = initialStateContacts, action) => {
  switch (action.type) {
    case TYPES.SET:
      return action.payload;

    case TYPES.ADD:
      return [...state, action.payload];

    case TYPES.REMOVE:
      return state.filter(el => el.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case TYPES.FILTER:
      return action.payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export { rootReducer };
