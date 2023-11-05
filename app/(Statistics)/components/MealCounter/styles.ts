import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  padding: 15px;

  height: 100px;

  align-items: center;
  justify-content: space-evenly;

  border-radius: 8px;
`;

export const TitleCounter = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;
