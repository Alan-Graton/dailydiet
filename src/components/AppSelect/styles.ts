import styled from "styled-components/native";

export type ButtonStyleProps = string | null;

interface Props {
  type?: ButtonStyleProps;
  selected?: ButtonStyleProps;
}

export const Button = styled.TouchableOpacity<Props>`
  flex-direction: row;

  width: 150px;
  height: 70px;

  align-items: center;
  justify-content: center;

  gap: 10px;

  border: 1px solid
    ${({ theme, type, selected }) => {
      if (type === "SUCCESS" && selected === type)
        return theme.COLORS.GREEN_300;
      if (type === "ERROR" && selected === type) return theme.COLORS.RED_300;
      else return theme.COLORS.GRAY_300;
    }};

  border-radius: 6px;

  margin: 10px 0 15px 0;

  background-color: ${({ theme, type, selected }) => {
    if (type === "SUCCESS" && selected === type) return theme.COLORS.GREEN_200;
    if (type === "ERROR" && selected === type) return theme.COLORS.RED_200;
    else return theme.COLORS.GRAY_300;
  }};
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const Status = styled.View<Props>`
  width: 15px;
  height: 15px;

  border-radius: 50px;

  background-color: ${({ theme, type }) => {
    if (type === "SUCCESS") return theme.COLORS.GREEN_300;
    if (type === "ERROR") return theme.COLORS.RED_300;
  }};
`;
