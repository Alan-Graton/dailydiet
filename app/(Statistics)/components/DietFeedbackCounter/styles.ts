import styled from "styled-components/native";

export type ContainerStyleProps = "SUCCESS" | "ERROR";

interface Props {
  type?: ContainerStyleProps;
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) => {
    if (type === "SUCCESS") return theme.COLORS.GREEN_200;
    else return theme.COLORS.RED_200;
  }};

  padding: 15px;

  align-items: center;
  justify-content: space-evenly;


  width: 150px;
  height: 125px;

  border-radius: 8px;
`;

export const CounterTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
`;
