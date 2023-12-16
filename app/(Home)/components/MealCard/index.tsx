import React from "react";
import { useRouter } from "expo-router";
import { Text } from "react-native";

import { MealContext } from "@/contexts/MealContext";

import { IMealDTO } from "@/storage/config/MealDTO";

import * as S from "./styles";

type Props = {
  item: IMealDTO;
};

/** TODO:
 * Refeições com datas iguais devem estar agrupadas
 *
 * Usar o Context dentro desse component ou em volta do seu pai?
 */
export function MealCard({ item }: Props) {
  const navigation = useRouter();

  const { setSelectedMeal } = React.useContext(MealContext);

  function handleCardPress(pressedItem: IMealDTO) {
    setSelectedMeal((prevState) => (prevState = pressedItem));
    navigation.push("/(MealDetails)");
  }

  return (
    <S.Container
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <S.DateTitle>{item?.date}</S.DateTitle>
      <S.Card onPress={() => handleCardPress(item)}>
        <S.CardContent>
          <S.TimeTitle>{item?.time}</S.TimeTitle>
          <Text>|</Text>
          <S.MealName>{item?.name}</S.MealName>
        </S.CardContent>
        <S.FeedBackBall type={item?.feedback} />
      </S.Card>
    </S.Container>
  );
}
