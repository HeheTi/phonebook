import FormContact from './FormContact';
import ContactsList from './ContactsList';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import { Box } from 'common/Box';
import { Title, TitleSection } from './App.styled';
import { useSelector } from 'react-redux';
import { selectItemsContacts } from 'redux/selectors';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const contacts = useSelector(selectItemsContacts);

  return (
    <Box ml="auto" mr="auto" width="400px" p="15px">
      <Title>Phonebook</Title>
      <FormContact />

      <TitleSection>Contacts</TitleSection>
      {contacts.length === 0 && <p>Add contact on your contacts list</p>}
      {contacts.length > 1 && <Filter />}
      <ContactsList />

      <ToastContainer />
    </Box>
  );
};

export default App;
