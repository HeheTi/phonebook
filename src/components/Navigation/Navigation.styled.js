import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigateLink = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.ms};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.hover};
  }

  &.active {
    color: ${p => p.theme.colors.active};
  }
`;

export const FirstNavL = styled(NavLinkStyled)`
  margin-right: ${p => p.theme.space[2]}px;
`;
