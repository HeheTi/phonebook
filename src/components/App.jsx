import { useState, useEffect } from 'react';
import FormContact from './FormContact';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList';
import Filter from './Filter/Filter';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from 'common/Box';
import { Title, TitleSection } from './App.styled';
import * as storage from 'services/localStorage';

const STORAGE_CONTACTS_KEY = 'phonebook-contacts';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    () => storage.get(STORAGE_CONTACTS_KEY) || [...INITIAL_CONTACTS]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (!contacts.length) return;
    storage.save(STORAGE_CONTACTS_KEY, contacts);
  }, [contacts]);

  const isHaveName = contact =>
    contacts.some(item => item.name === contact.name);

  const onAddContact = contact => {
    if (isHaveName(contact)) {
      toast.error(`${contact.name} is already in contacts`, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    const prepeadContact = {
      ...contact,
      id: nanoid(),
    };

    setContacts(state => [...state, prepeadContact]);
  };

  const deleteContact = id => {
    setContacts(state => state.filter(item => item.id !== id));
  };

  const fitletedChangeState = e => setFilter(e.target.value);

  const filteredContacts = contacts => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredData = filteredContacts(contacts);

  return (
    <Box ml="auto" mr="auto" width="400px" p="15px">
      <Title>Phonebook</Title>
      <FormContact onSubmit={onAddContact} />

      <TitleSection>Contacts</TitleSection>
      {contacts.length === 0 && <p>Add contact on your contacts list</p>}
      {contacts.length > 1 && (
        <Filter
          value={filter}
          onChange={fitletedChangeState}
          clearFilter={() => setFilter('')}
        />
      )}
      {filteredData.length > 0 && (
        <ContactsList contacts={filteredData} delContact={deleteContact} />
      )}

      <ToastContainer />
    </Box>
  );
};

export default App;
