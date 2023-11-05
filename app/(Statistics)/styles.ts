import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
`;
