import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 10px;

  width: 300px;
  height: 200px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 8px;

  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
  `}
  text-align: center;
`;
