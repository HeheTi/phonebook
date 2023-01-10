import PropTypes from 'prop-types';
import { Item, Text, BtnIcon } from './ListItem.styled';
import { HiTrash } from 'react-icons/hi2';
import { normalizeName } from 'services/normalized';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/selectors';

const ListItem = ({ userName, userNumber, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handlerDeleteContact = () => {
    if (isLoading) return;
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <Text>
        {normalizeName(userName)}: {userNumber}
      </Text>
      <BtnIcon
        type="button"
        disabled={isLoading}
        onClick={handlerDeleteContact}
      >
        <HiTrash size="16px" />
      </BtnIcon>
    </Item>
  );
};

ListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ListItem;
