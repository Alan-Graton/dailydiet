import React from "react";
import { useIsFocused } from "@react-navigation/native";

import { Stack } from "expo-router";

import { Header } from "./components/Header";
import { BestMealSequence } from "./components/BestMealSequence";
import { MealCounter } from "./components/MealCounter";
import { DietFeedbackCounter } from "./components/DietFeedbackCounter";

import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { getGeneralDetails } from "@/storage/getGeneralDetails";

export default function Statistics() {
  const isFocused = useIsFocused();
  const { COLORS } = useTheme();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [statistics, setStatistics] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function getStatistics() {
      const response = await getGeneralDetails();

      return response;
    }

    if (isFocused) {
      setLoading(true);
      const data = getStatistics();
      if (!data) return;

      setStatistics((prevState) => (prevState = data as any));
      setLoading(false);
    }
  }, [isFocused]);

  return (
    <S.Container>
      <Stack.Screen
        options={{
          headerTintColor: COLORS.GRAY_700,
          header: () => <Header percentage="90,86%" />,
        }}
      />
      <S.Title>Estatísticas gerais</S.Title>
      <S.Content>
        <BestMealSequence />
        <MealCounter />
        <S.GroupFeedbackCounter>
          <DietFeedbackCounter title="37" />
          <DietFeedbackCounter title="10" type="ERROR" />
        </S.GroupFeedbackCounter>
      </S.Content>
    </S.Container>
  );
}
