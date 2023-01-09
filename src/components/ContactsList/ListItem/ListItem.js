import PropTypes from 'prop-types';
import { Item, Text, BtnIcon } from './ListItem.styled';
import { HiTrash } from 'react-icons/hi2';
import { normalizeName } from 'services/normalized';
import { useDispatch } from 'react-redux';
import {} from 'redux/contacts/contactsSlice';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ListItem = ({ userName, userNumber, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Text>
        {normalizeName(userName)}: {userNumber}
      </Text>
      <BtnIcon type="button" onClick={() => dispatch(deleteContact(id))}>
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
