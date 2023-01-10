import FormContact from './FormContact';
import ContactsList from './ContactsList';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import { Box } from 'common/Box';
import { Title, TitleSection } from './App.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectItemsContacts } from 'redux/selectors';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';

const App = () => {
  const contacts = useSelector(selectItemsContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Box ml="auto" mr="auto" width="400px" p="15px">
      <Title>Phonebook</Title>
      <FormContact />

      <Box position="relative" mb="30px">
        <TitleSection>Contacts</TitleSection>
        {isLoading && <Loader />}
      </Box>

      {contacts.length === 0 && !isLoading && (
        <p>Add contact on your contacts list, please.</p>
      )}
      {contacts.length > 1 && <Filter />}

      <ContactsList />

      <ToastContainer />
    </Box>
  );
};

export default App;
