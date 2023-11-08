import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";

// Application Components
import { AppTextInput } from "@/components/AppTextInput";
import { AppSelect } from "@/components/AppSelect";
import { AppButton } from "@/components/AppButton";

// Screen Components
import { Header } from "./components/Header";

import * as S from "./styles";

export default function NewMeal() {
  return (
    <S.Container>
      <Stack.Screen options={{ header: () => <Header /> }} />

      <View style={{ width: "100%" }}>
        <S.InputLabel>Nome</S.InputLabel>
        <AppTextInput />
      </View>
      <View style={{ width: "100%" }}>
        <S.InputLabel>Descrição</S.InputLabel>
        <AppTextInput multiline />
      </View>

      <S.DateTimeForm>
        <View style={{ flex: 1 }}>
          <S.InputLabel>Data</S.InputLabel>
          <AppTextInput />
        </View>
        <View style={{ flex: 1 }}>
          <S.InputLabel>Hora</S.InputLabel>
          <AppTextInput />
        </View>
      </S.DateTimeForm>

      <S.InputLabel>Está dentro da dieta?</S.InputLabel>
      <S.DietStatusSelectForm>
        <AppSelect title="Sim" />
        <AppSelect title="Não" type="ERROR" />
      </S.DietStatusSelectForm>
      <AppButton title="Cadastrar refeição" />
    </S.Container>
  );
}
