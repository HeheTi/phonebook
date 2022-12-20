import React, { PureComponent } from 'react';
import FormContact from './FormContact';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList';
import Filter from './Filter/Filter';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from 'common/Box';
import { Title, TitleSection } from './App.styled';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends PureComponent {
  state = {
    contacts: [...INITIAL_CONTACTS],
    filter: '',
  };

  onAddContact = contact => {
    if (this.state.contacts.some(item => item.name === contact.name)) {
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

    this.setState(prevState => ({
      contacts: [...prevState.contacts, prepeadContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  fitletedChangeState = e => {
    const filterData = e.target.value;

    this.setState({
      filter: filterData,
    });
  };

  filteredContacts = contacts => {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredData = this.filteredContacts(contacts);

    return (
      <Box ml="auto" mr="auto" width="400px" p="15px">
        <Title>Phonebook</Title>
        <FormContact onSubmit={this.onAddContact} />

        <TitleSection>Contacts</TitleSection>
        {filteredData.length === 0 && <p>Add contact on your contacts list</p>}
        {contacts.length > 2 && (
          <Filter value={filter} onChange={this.fitletedChangeState} />
        )}
        {filteredData.length > 0 && (
          <ContactsList
            contacts={filteredData}
            delContact={this.deleteContact}
          />
        )}

        <ToastContainer />
      </Box>
    );
  }
}

export default App;
