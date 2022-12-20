import styled from '@emotion/styled';

export const Title = styled.h1`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const TitleSection = styled.h2`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.ml};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
