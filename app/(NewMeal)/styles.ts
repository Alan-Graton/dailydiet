import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

export const Form = styled.View`
  background-color: red;
  flex: 1;
  width: 100%;
  padding: 16px;

  gap: 15px;
`;
