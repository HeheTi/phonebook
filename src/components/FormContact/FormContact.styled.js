import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${p => p.theme.colors.btn};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  padding: ${p => p.theme.space[1]}px;

  :hover:disabled,
  :focus:disabled {
    cursor: no-drop;
  }

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.label};
    color: ${p => p.theme.colors.bgHoverColor};
  }
`;
