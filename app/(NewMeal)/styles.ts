import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
`;

export const InputLabel = styled.Text`
  font-weight: bold;
  align-self: flex-start;
`;

export const DateTimeForm = styled.View`
  flex-direction: row;

  width: 100%;

  gap: 15px;
`;

export const DietStatusSelectForm = styled.View`
  width: 100%;
  align-items: center;

  justify-content: space-around;

  flex-direction: row;
`;
