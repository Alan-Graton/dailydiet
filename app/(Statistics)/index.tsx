import { Stack } from "expo-router";

// Screen Components
import { Header } from "./components/Header";
import { BestMealSequence } from "./components/BestMealSequence";
import { MealCounter } from "./components/MealCounter";
import { InDietMeals } from "./components/InDietMeals";
import { OffDietMeals } from "./components/OffDietMeals";

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
      <BestMealSequence />
      <MealCounter />
      <InDietMeals />
      <OffDietMeals />
    </S.Container>
  );
}
