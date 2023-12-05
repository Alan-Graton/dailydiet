import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

interface FeedbackBallStylesProps {
  feedback: string;
}

type Props = FeedbackBallStylesProps;

export const Container = styled(SafeAreaView)`
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
`;

export const DateTimeTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DateTime = styled.Text`
  font-size: 16px;
`;

export const FeedbackForm = styled.View`
  width: 45%;
  height: 20%;

  flex-direction: row;

  padding: 5px;
  border-radius: 50px;

  background-color: lightgray;

  align-items: center;
  justify-content: space-evenly;
`;

export const FeedbackText = styled.Text``;

export const FeedbackBall = styled.View<Props>`
  background-color: ${({ feedback }) =>
    feedback === "SUCCESS" ? "green" : "red"};

  width: 10px;
  height: 10px;

  border-radius: 50px;
`;
