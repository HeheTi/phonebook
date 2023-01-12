import { useSelector } from 'react-redux';
import { selectIsLoading, selectItemsContacts } from 'redux/selectors';
import { Box } from 'common/Box';
import Loader from 'components/Loader';
import FormContact from 'components/FormContact';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Title, TitleSection } from './ContactsPage.styled';

const ContactsPage = () => {
  const contacts = useSelector(selectItemsContacts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
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
    </div>
  );
};

export default ContactsPage;
