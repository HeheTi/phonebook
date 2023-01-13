import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ImgWrapper = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  overflow: hidden;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.ms};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.label};
`;

export const BtnLogout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: transparent;
  background-color: ${p => p.theme.colors.btnLogout};

  svg {
    fill: currentColor;
  }

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.bgHoverColor};
    svg {
      fill: ${p => p.theme.colors.active};
    }
  }
`;
