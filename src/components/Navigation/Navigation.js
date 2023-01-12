import UserMenu from 'components/UserMenu';
import { FirstNavL, NavigateLink, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigateLink>
      <div>
        <FirstNavL to="/">Home</FirstNavL>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      </div>
      <div>
        <FirstNavL to="/login">Login</FirstNavL>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      </div>
      <UserMenu />
    </NavigateLink>
  );
};

export default Navigation;
