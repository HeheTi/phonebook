import {
  BtnLogout,
  ImgWrapper,
  UserName,
  UserWrapper,
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import { selectAuthUserName } from 'redux/selectors';
import LogoutIcon from '@mui/icons-material/Logout';
import { normalizeName } from 'services/normalized';
import { useMemo } from 'react';
import UserPic from 'images/cat.jpg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectAuthUserName);

  const normalizedName = useMemo(() => normalizeName(name), [name]);

  return (
    <UserWrapper>
      <ImgWrapper>
        <img src={UserPic} alt="Use like a cat" />
      </ImgWrapper>
      <UserName>{!!name ? normalizedName : 'Anonymous'}</UserName>
      <BtnLogout onClick={() => dispatch(logoutUser())}>
        <LogoutIcon />
      </BtnLogout>
    </UserWrapper>
  );
};

export default UserMenu;
