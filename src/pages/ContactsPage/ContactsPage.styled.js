import styled from 'styled-components';

export const Title = styled.h1`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
`;

export const TitleSection = styled.h2`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.ml};
  text-align: center;
`;
