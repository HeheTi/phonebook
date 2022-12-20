import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[1]}px;
  }
`;

export const Text = styled.p`
  margin-right: ${p => p.theme.space[1]}px;
`;

export const BtnIcon = styled.button`
  width: 20px;
  height: 20px;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${p => p.theme.borders.none};
  background-color: inherit;
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  :hover svg,
  :focus svg {
    fill: ${p => p.theme.colors.fill};
    transform: scale3d(1.2, 1.2, 1.2);
  }
`;
