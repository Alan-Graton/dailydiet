import React from "react";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";

// Application Components
import { AppIconButton } from "@/components/AppIconButton";
import { AppEmptyList } from "@/components/AppEmptyList";

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
  feedback: "SUCCESS" | "ERROR";
}

export default function Home() {
  const navigation = useRouter();
  const { COLORS } = useTheme();

  const [meals, setMeals] = React.useState<IMealList[]>([
    { date: "01/11/2023", time: "05:00", name: "Pão", feedback: "SUCCESS" },
    {
      date: "02/11/2023",
      time: "11:30",
      name: "Maionese",
      feedback: "ERROR",
    },
    { date: "04/11/2023", time: "09:25", name: "Pipoca", feedback: "SUCCESS" },
    { date: "05/11/2023", time: "18:23", name: "Banana", feedback: "ERROR" },
  ]);

  return (
    <S.Container>
      <StatisticsCard
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        onPress={() => navigation.push("/(Statistics)")}
      />
      <S.ActionForm>
        <S.ActionFormTitle>Refeições</S.ActionFormTitle>
        <AppIconButton icon="add" title="Nova refeição" color={COLORS.WHITE} />
      </S.ActionForm>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <MealCard
            date={item.date}
            time={item.time}
            meal={item.name}
            type={item.feedback}
          />
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
