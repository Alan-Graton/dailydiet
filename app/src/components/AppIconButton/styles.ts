import styled, { css } from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

interface AppIconButtonStyleProps {
  outline?: boolean;
}

type Props = AppIconButtonStyleProps;

export const Container = styled.View`
  width: 100%;

  padding: 5px;

  align-items: center;
`;

export const Button = styled.TouchableOpacity<Props>`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, outline }) => {
    if (outline) {
      return theme.COLORS.WHITE;
    }

    return theme.COLORS.GRAY_700;
  }};

  border: ${({ theme, outline }) => {
    if (outline) {
      return `1px solid ${theme.COLORS.GRAY_700}`;
    }
  }};

  border-radius: 8px;

  gap: 10px;

  flex-direction: row;

  width: 100%;

  height: 60px;

  padding: 10px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, outline }) => css`
    font-size: ${theme.FONT_SIZE.XMD}px;
    color: ${outline ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(Ionicons)``;
