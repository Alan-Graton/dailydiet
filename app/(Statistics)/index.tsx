import { Stack } from "expo-router";

// Screen Components
import { Header } from "./components/Header";
import { BestMealSequence } from "./components/BestMealSequence";
import { MealCounter } from "./components/MealCounter";
import { DietFeedbackCounter } from "./components/DietFeedbackCounter";

// Styles
import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function Statistics() {
  const { COLORS } = useTheme();

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
