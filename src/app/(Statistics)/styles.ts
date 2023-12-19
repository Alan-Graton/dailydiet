import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  align-items: center;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  padding: 10px;

  gap: 15px;
`;

export const GroupFeedbackCounter = styled.View`
  flex-direction: row;

  gap: 10px;

  align-items: center;
  justify-content: center;
`


export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
`;
