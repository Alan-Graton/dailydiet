import React from "react";
import { Stack } from "expo-router";

import { Content } from "./components/Content";

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
