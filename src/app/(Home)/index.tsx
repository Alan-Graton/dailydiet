import React, { useState, useContext } from "react";
import { router } from "expo-router";
import { useIsFocused } from "@react-navigation/native";
import { SectionList } from "react-native";

import { MealContext } from "@/contexts/MealContext";
import { StatistcsContext } from "@/contexts/StatistcsContext";

import { IMealDTO } from "@/storage/config/MealDTO";
import { getAllMeals } from "@/storage/getAllMeals";

import { AppIconButton } from "@/components/AppIconButton";
import { AppEmptyList } from "@/components/AppEmptyList";
import { AppLoader } from "@/components/AppLoader";

import { MealCard } from "./components/MealCard";
import { StatisticsCard } from "./components/StatisticsCard";

import { SectionListFactory } from "@/factories/components/SectionListData.factory";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export default function Home() {
  const isFocused = useIsFocused();
  const { COLORS } = useTheme();

  const { setSelectedMeal } = useContext(MealContext);
  const { statistics, fetchStatistics } = useContext(StatistcsContext);

  const HEADER_TITLE =
    statistics.percentageStatus === "SUCCESS"
      ? "das refeições dentro da dieta"
      : "das refeições fora da dieta";

  const [loading, setLoading] = useState<boolean>(false);
  const [meals, setMeals] = useState<IMealDTO[]>([]);

  React.useEffect(() => {
    async function fetchMeals() {
      setLoading(true);
      const response = await getAllMeals();
      if (!response) return;

      fetchStatistics(response);

      setMeals((prevState) => (prevState = response));
      setLoading(false);
    }

    if (isFocused) {
      setSelectedMeal(null);
      fetchMeals();
    }
  }, [isFocused]);

  return (
    <S.Container>
      <StatisticsCard
        title={`${statistics.percentage}%`}
        type={statistics.percentageStatus}
        subtitle={HEADER_TITLE}
        onPress={() => {
          router.push("/(DietFeedback)/ERROR");
        }}
      />
      <S.ActionForm>
        <S.ActionFormTitle>Refeições</S.ActionFormTitle>
        <AppIconButton
          icon="add"
          title="Nova refeição"
          color={COLORS.WHITE}
          handleOnPress={() => router.push("/(NewMeal)")}
        />
      </S.ActionForm>

      <SectionList
        sections={SectionListFactory(meals)}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <>
            <AppLoader loading={loading} />
            {!loading && <MealCard item={item} />}
          </>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <S.SectionListTitle>{title}</S.SectionListTitle>
        )}
        ListEmptyComponent={() => (
          <AppEmptyList
            title="Nenhuma refeição"
            subtitle="Que tal cadastra uma agora?"
          />
        )}
      />
    </S.Container>
  );
}
