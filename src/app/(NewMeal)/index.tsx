import React from "react";
import { Stack } from "expo-router";

// Screen Components
import { Content } from "./components/Content";

// Screen Components
import { Header } from "./components/Header";

import * as S from "./styles";

export default function NewMeal() {
  return (
    <>
      <S.Container>
        <Stack.Screen options={{ header: () => <Header /> }} />
        <Content />
      </S.Container>
    </>
  );
}
