import React from "react";
import { FlatList } from "react-native";

// Application Components
import { AppIconButton } from "../src/components/AppIconButton";
import { AppEmptyList } from "../src/components/AppEmptyList";

// Screen Components
import { MealCard } from "./components/MealCard";
import { StatisticsCard } from "./components/StatisticsCard";

// Styles
import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface IMealList {
  date: string;
  time: string;
  name: string;
}

export default function Home() {
  const { COLORS } = useTheme();

  const [meals, setMeals] = React.useState<IMealList[]>([
    { date: "01/11/2023", time: "18:23", name: "Pão" },
    { date: "02/11/2023", time: "18:23", name: "Maionese" },
    { date: "04/11/2023", time: "18:23", name: "Pipoca" },
    { date: "05/11/2023", time: "18:23", name: "Pipoca" },
  ]);

  return (
    <S.Container>
      <StatisticsCard title="90,86%" subtitle="das refeições dentro da dieta" />
      <S.ActionForm>
        <S.ActionFormTitle>Refeições</S.ActionFormTitle>
        <AppIconButton icon="add" title="Nova refeição" color={COLORS.WHITE} />
      </S.ActionForm>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <MealCard date={item.date} time={item.time} meal={item.name} />
        )}
        ListEmptyComponent={() => (
          <AppEmptyList
            title="Nenhum refeição"
            subtitle="Que tal cadastrar uma agora?"
          />
        )}
      />
    </S.Container>
  );
}
