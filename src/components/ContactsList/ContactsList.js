import { useEffect, useMemo } from 'react';
import ListItem from './ListItem/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectItemsContacts } from 'redux/selectors';
import { changeFilter } from 'redux/filter/filterActions';

const ContactsList = () => {
  const contacts = useSelector(selectItemsContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 1) {
      dispatch(changeFilter(''));
    }
  }, [contacts.length, dispatch]);

  const filteredData = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  return (
    <ul>
      {filteredData.map(({ id, name, number }) => (
        <ListItem key={id} userName={name} userNumber={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactsList;
