import UserMenu from 'components/UserMenu';
import AuthNav from './AuthNav';
import { FirstNavL, NavLinkStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/selectors';
import { Box } from 'common/Box';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <nav>
        <FirstNavL to="/">Home</FirstNavL>
        {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};

export default Navigation;
