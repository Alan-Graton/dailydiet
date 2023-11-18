import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px;

  gap: 15px;
`;

export const TextInputLabel = styled.Text`
  font-weight: bold;
  align-self: flex-start;
`;

export const DateTimeContainer = styled.View`
  flex-direction: row;

  gap: 15px;
`;

export const DietStatusContainer = styled.View`
  margin-bottom: 16%;
`

export const DietStatusForm = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  gap: 10px;
`;

export const DateTimeForm = styled.View`
  flex: 1;

  gap: 10px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
`;
