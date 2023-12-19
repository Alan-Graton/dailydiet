import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { IFeedback } from "@/interfaces";

export interface StatisticsButtonStyleProps {
  type?: IFeedback;
}

type Props = StatisticsButtonStyleProps;

export const StatisticsButton = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }) => {
    if (type === "SUCCESS") return theme.COLORS.GREEN_100;
    if (type === "ERROR") return theme.COLORS.RED_100;
  }};

  width: 327px;
  height: 136px;

  border-radius: 8px;

  align-items: center;

  padding: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XLG}px;
    font-weight: bold;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const OpenIcon = styled(ArrowUpRight).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "SUCCESS" ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300,
  })
)`
  position: relative;
  align-self: flex-end;
`;
