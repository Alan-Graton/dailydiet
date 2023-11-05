import styled, { css } from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";

type BackIconStyleProps = "SUCCESS" | "ERORR";

interface Props {
  type?: BackIconStyleProps;
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_200 : theme.COLORS.RED_200};

  align-items: center;
  justify-content: center;

  height: 170px;
`;

export const BackButton = styled.TouchableOpacity`
    padding: 5px;

    position: relative;
    align-self: flex-start;

    margin-left: 12px;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "SUCCESS" ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300,
}))``;

export const PercentageTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XLG}px;
  `}

  font-weight: bold;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XMD}px;
  `}
`;
