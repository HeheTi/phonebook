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
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: inherit;
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  :hover svg,
  :focus svg {
    fill: #5856d6;
    transform: scale3d(1.2, 1.2, 1.2);
  }
`;
