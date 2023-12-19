import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

import { IFeedback } from "@/interfaces";

export type TitleStyleProps = IFeedback;

interface Props {
  type?: TitleStyleProps;
}

export const Container = styled(SafeAreaView)`
  justify-content: space-between;

  padding: 16px;

  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  padding: 5px;

  align-items: center;

  gap: 10px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Footer = styled.View`
  padding: 5px;
  flex: 0.24;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;

    color: ${type === "SUCCESS"
      ? theme.COLORS.GREEN_300
      : theme.COLORS.RED_300};
  `}

  font-weight: bold;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  text-align: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 265px;
`;
