import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;

  height: 100px;

  flex-direction: row;
  align-items: center;

  /** TODO: Color must be dynamic */
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  text-align: center;
`;
