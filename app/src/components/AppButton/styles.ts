import styled, { css } from "styled-components/native";

export const Button = styled.TouchableOpacity`
  padding: 10px;

  width: 280px;
  height: 65px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: bold;
    color: ${theme.COLORS.WHITE};
  `}
`;
