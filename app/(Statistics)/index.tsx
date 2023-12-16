import React from "react";
import { useIsFocused } from "@react-navigation/native";

import { Stack } from "expo-router";

import { StatistcsContext } from "@/contexts/StatistcsContext";

import { Header } from "./components/Header";
import { BestMealSequence } from "./components/BestMealSequence";
import { MealCounter } from "./components/MealCounter";
import { DietFeedbackCounter } from "./components/DietFeedbackCounter";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function Statistics() {
  const isFocused = useIsFocused();
  const { COLORS } = useTheme();

  const { statistics } = React.useContext(StatistcsContext);

  return (
    <S.Container>
      <Stack.Screen
        options={{
          headerTintColor: COLORS.GRAY_700,
          header: () => <Header percentage={`${statistics.percentage}%`} />,
        }}
      />
      <S.Title>Estatísticas gerais</S.Title>
      <S.Content>
        <BestMealSequence title={statistics.bestMealSequence} />
        <MealCounter title={statistics.mealCounter} />
        <S.GroupFeedbackCounter>
          <DietFeedbackCounter title={statistics.inDietMeals} />
          <DietFeedbackCounter title={statistics.outDietMeals} type="ERROR" />
        </S.GroupFeedbackCounter>
      </S.Content>
    </S.Container>
  );
}
