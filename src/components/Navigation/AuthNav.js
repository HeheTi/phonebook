import { FirstNavL, NavLinkStyled } from './Navigation.styled';

const AuthNav = () => {
  return (
    <div>
      <FirstNavL to="/login">Login</FirstNavL>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
    </div>
  );
};

export default AuthNav;
