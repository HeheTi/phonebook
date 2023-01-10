import { useState, useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Box } from './../../common/Box';
import { Input, LabelInput, ButtonSubmit } from './FormContact.styled';
import { theme } from 'common/theme';
import { toast } from 'react-toastify';
import { normalizeName } from 'services/normalized';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectItemsContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/contactsOperations';

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

  const { current: nameInputId } = useRef(nanoid());
  const { current: numberInputId } = useRef(nanoid());

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
    <Box
      as="form"
      p="10px"
      border={theme.borders.normal}
      borderColor={theme.colors.border}
      mb={theme.space[3]}
      onSubmit={handleSubmitFormContact}
    >
      <LabelInput htmlFor={nameInputId}>Name</LabelInput>
      <Input
        id={nameInputId}
        type="text"
        name="name"
        value={name}
        placeholder="Rosie Simpson"
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <LabelInput htmlFor={numberInputId}>Number</LabelInput>
      <Input
        id={numberInputId}
        type="tel"
        name="number"
        value={number}
        placeholder="459-12-56"
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <ButtonSubmit type="submit" disabled={!name || !number || isLoading}>
        Add
      </ButtonSubmit>
    </Box>
  );
};

export default FormContact;
