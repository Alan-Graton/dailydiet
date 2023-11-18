import * as S from "./styles";

import { View } from "react-native";

export function Content() {
  return (
    <S.Container>
      <View>
        <S.Title>Sanduíche</S.Title>
        <S.Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </S.Description>
      </View>
      <View>
        <S.DateTimeTitle>Data e Horário</S.DateTimeTitle>
        <S.DateTime>12/08/2023 às 16:00</S.DateTime>
      </View>
      <S.DietStatusForm>
        <S.DietStatusFeedback />
        <S.DietStatusText>dentro da dieta</S.DietStatusText>
      </S.DietStatusForm>
    </S.Container>
  );
}
