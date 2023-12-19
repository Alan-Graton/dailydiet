import styled, { css } from "styled-components/native";

interface AppButtonStyleProps {
  outline?: boolean;
}

type Props = AppButtonStyleProps;

export const Button = styled.TouchableOpacity<Props>`
  padding: 10px;

  width: 100%;
  height: 65px;

  flex: 1;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

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
`;

export const Title = styled.Text<Props>`
  ${({ theme, outline }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: bold;
    color: ${outline ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
  `}
`;
