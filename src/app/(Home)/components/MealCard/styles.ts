import styled, { css } from "styled-components/native";

export type FeedBackBallStyleProps = "SUCCESS" | "ERROR";

interface Props {
  type?: FeedBackBallStyleProps;
}

export const Container = styled.ScrollView`
  padding: 10px;
  width: 320px;
`;

export const Card = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;

  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;

  width: 100%;
  height: 55px;
`;

export const CardContent = styled.View`
  flex-direction: row;

  flex: 1;

  gap: 10px;
`;

export const TimeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const FeedBackBall = styled.View<Props>`
  width: 20px;
  height: 20px;

  background-color: ${({ theme, type }) => {
    if (type === "SUCCESS") return theme.COLORS.GREEN_200;
    if (type === "ERROR") return theme.COLORS.RED_200;
  }};

  border-radius: 50px;
`;
