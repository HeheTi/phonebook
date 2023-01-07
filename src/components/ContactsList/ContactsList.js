import { useMemo, useEffect } from 'react';
import ListItem from './ListItem/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import * as storage from 'services/localStorage';
import { changeFilter, setContacts } from 'redux/actions';
import { STORAGE_CONTACTS_KEY } from 'services/constants';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const contactsStorage = storage.get(STORAGE_CONTACTS_KEY) || [
      ...INITIAL_CONTACTS,
    ];
    dispatch(setContacts(contactsStorage));
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length === 1) {
      dispatch(changeFilter(''));
    }
  }, [contacts.length, dispatch]);

  useEffect(() => {
    if (!contacts.length) return;
    storage.save(STORAGE_CONTACTS_KEY, contacts);
  }, [contacts]);

  const filteredData = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  if (contacts.length === 0) {
    return null;
  }

  return (
    <ul>
      {filteredData.map(({ id, name, number }) => (
        <ListItem key={id} userName={name} userNumber={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactsList;
