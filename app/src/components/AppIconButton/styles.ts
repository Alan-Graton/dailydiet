import styled, { css } from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;

  padding: 5px;

  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  gap: 10px;

  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  width: 100%;

  height: 60px;

  padding: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XMD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(Ionicons)``;
