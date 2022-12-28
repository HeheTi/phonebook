import PropTypes from 'prop-types';
import { Item, Text, BtnIcon } from './ListItem.styled';
import { HiTrash } from 'react-icons/hi2';
import { normalizeName } from 'services/normalized';

const ListItem = ({ userName, userNumber, onClickBtn }) => {
  return (
    <Item>
      <Text>
        {normalizeName(userName)}: {userNumber}
      </Text>
      <BtnIcon type="button" onClick={onClickBtn}>
        <HiTrash size="16px" />
      </BtnIcon>
    </Item>
  );
};

ListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};

export default ListItem;
