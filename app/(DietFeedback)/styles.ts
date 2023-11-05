import styled, { css } from "styled-components/native";

export type TitleStyleProps = "SUCCESS" | "ERROR";

interface Props {
  type?: TitleStyleProps;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const FeedbackTexts = styled.View`
  padding: 5px;

  gap: 10px;

  align-items: center;
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
    font-size: ${theme.FONT_SIZE.XMD}px;
  `}

  text-align: center;
`;

export const StrongSubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XMD}px;
  `}

  font-weight: bold;
`;

export const Image = styled.Image`
  width: 200px;
  height: 265px;
`;
