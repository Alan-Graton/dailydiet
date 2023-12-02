import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

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

export const FeedbackFeedback = styled.View`
  background-color: green;

  width: 10px;
  height: 10px;

  border-radius: 50px;
`;
