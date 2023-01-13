import { useState } from 'react';
import { ButtonSubmit, Form } from './FormContact.styled';
import { toast } from 'react-toastify';
import { normalizeName } from 'services/normalized';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectItemsContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { TextField } from '@mui/material';

const isHaveName = (nameContact, items) =>
  items.some(item => item.name === nameContact);

const alertDontHaveName = name =>
  toast.error(`${normalizeName(name)} is already in contacts`, {
    position: 'top-right',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItemsContacts);
  const isLoading = useSelector(selectIsLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => setName(e.target.value);
  const handleChangeNumber = e => setNumber(e.target.value);

  const addContactData = () => {
    const trimName = name.trim();
    const trimNumber = number.trim();

    if (!trimName || !trimNumber) {
      return;
    }

    if (isHaveName(trimName, contacts)) {
      alertDontHaveName(trimName);
      return;
    }

    dispatch(addContact({ name: trimName, number: trimNumber }));
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmitFormContact = e => {
    e.preventDefault();
    addContactData();
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmitFormContact}>
      <TextField
        sx={{ width: '100%' }}
        required
        color="secondary"
        id="outlined-required-name-contact"
        label="Name"
        name="name"
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      <TextField
        sx={{ width: '100%' }}
        required
        color="secondary"
        type="tel"
        id="outlined-required-name-contact"
        label="Number"
        name="number"
        value={number}
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />

      <ButtonSubmit
        color="secondary"
        variant="contained"
        type="submit"
        disabled={!name || !number || isLoading}
      >
        Add contact on your list
      </ButtonSubmit>
    </Form>
  );
};

export default FormContact;
