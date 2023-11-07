import React from "react";
import { Text } from "react-native";
import { Stack } from "expo-router";

// Screen Components
import { Header } from "./components/Header";

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function NewMeal() {
  return (
    <S.Container>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <Text>Please, just work</Text>
    </S.Container>
  );
}
