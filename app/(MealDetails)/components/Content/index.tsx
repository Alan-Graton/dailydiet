import React from "react";
import * as S from "./styles";

import { View } from "react-native";
import { MealContext } from "@/contexts/MealContext";

export function Content() {
  const { selectedMeal } = React.useContext(MealContext);

  console.log("\n\n[Meal Details - Content] Selected Meal: ", selectedMeal);

  const FEEDBACK_TEXT =
    selectedMeal && selectedMeal.feedback === "SUCCESS"
      ? "dentro da dieta"
      : "fora da dieta";

  return (
    <>
      <S.Container>
        <View>
          <S.Title>Sanduíche</S.Title>
          <S.Description>
            {selectedMeal && selectedMeal.description}
          </S.Description>
        </View>
        <View>
          <S.DateTimeTitle>Data e Horário</S.DateTimeTitle>
          <S.DateTime>
            {selectedMeal && selectedMeal.date} às{" "}
            {selectedMeal && selectedMeal.time}
          </S.DateTime>
        </View>
        <S.FeedbackForm>
          <S.FeedbackBall feedback={selectedMeal && selectedMeal.feedback} />
          <S.FeedbackText>{FEEDBACK_TEXT}</S.FeedbackText>
        </S.FeedbackForm>
      </S.Container>
    </>
  );
}
