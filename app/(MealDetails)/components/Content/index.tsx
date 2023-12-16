import React from "react";
import { MealContext } from "@/contexts/MealContext";

import { View } from "react-native";

import * as S from "./styles";

export function Content() {
  const { selectedMeal } = React.useContext(MealContext);

  const FEEDBACK_TEXT =
    selectedMeal?.feedback === "SUCCESS" ? "dentro da dieta" : "fora da dieta";

  return (
    <>
      <S.Container>
        <View>
          <S.Title>{selectedMeal?.name}</S.Title>
          <S.Description>{selectedMeal?.description}</S.Description>
        </View>
        <View>
          <S.DateTimeTitle>Data e Horário</S.DateTimeTitle>
          <S.DateTime>
            {selectedMeal?.date} às {selectedMeal?.time}
          </S.DateTime>
        </View>
        <S.FeedbackForm>
          <S.FeedbackBall feedback={selectedMeal?.feedback} />
          <S.FeedbackText>{FEEDBACK_TEXT}</S.FeedbackText>
        </S.FeedbackForm>
      </S.Container>
    </>
  );
}
