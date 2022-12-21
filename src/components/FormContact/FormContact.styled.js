import styled from '@emotion/styled';

export const LabelInput = styled.label`
  display: block;
  color: ${p => p.theme.colors.label};
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: ${p => p.theme.space[1]}px;
`;

export const ButtonSubmit = styled.button`
  margin-top: ${p => p.theme.space[2]}px;
  width: 100px;
  background-color: ${p => p.theme.colors.btn};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  transition: transform 250ms ease-in-out;
  padding: ${p => p.theme.space[1]}px;

  :hover:disabled,
  :focus:disabled {
    cursor: no-drop;
  }

  :hover:not(:disabled),
  :focus:not(:disabled) {
    transform: scale3d(1.1, 1.1, 1.1);
    background-color: ${p => p.theme.colors.secondary};
  }
`;
