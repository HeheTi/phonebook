import { UserWrapper } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import { selectAuthUserName } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectAuthUserName);
  return (
    <UserWrapper>
      <p>{!!name ? name : 'Anonymous'}</p>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </UserWrapper>
  );
};

export default UserMenu;
