import React, { useState } from "react";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { getAllMeals } from "@/storage/getAllMeals";

import { AppIconButton } from "@/components/AppIconButton";
import { AppEmptyList } from "@/components/AppEmptyList";
import { AppLoader } from "@/components/AppLoader";

import { MealCard } from "./components/MealCard";
import { StatisticsCard } from "./components/StatisticsCard";

import { IMealList } from "@/interfaces";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function Home() {
  const isFocused = useIsFocused();
  const navigation = useRouter();
  const { COLORS } = useTheme();

  const [loading, setLoading] = useState<boolean>(false);
  const [meals, setMeals] = useState<IMealList[]>([]);

  React.useEffect(() => {
    async function fetchMeals() {
      setLoading(true);
      await getAllMeals(setMeals);
      setLoading(false);
    }

    fetchMeals();
  }, [isFocused]);

  return (
    <S.Container>
      <StatisticsCard
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        onPress={() => navigation.push("/(Statistics)")}
      />
      <S.ActionForm>
        <S.ActionFormTitle>Refeições</S.ActionFormTitle>
        <AppIconButton
          icon="add"
          title="Nova refeição"
          color={COLORS.WHITE}
          handleOnPress={() => navigation.push("/(NewMeal)")}
        />
      </S.ActionForm>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <>
            <AppLoader loading={loading} />
            {!loading && (
              <MealCard
                date={item.date}
                time={item.time}
                meal={item.name}
                type={item.feedback}
              />
            )}
          </>
        )}
        ListEmptyComponent={() => (
          <AppEmptyList
            title="Nenhuma refeição"
            subtitle="Que tal cadastrar uma agora?"
          />
        )}
      />
    </S.Container>
  );
}
