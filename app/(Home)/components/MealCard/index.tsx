import React from "react";
import { useRouter } from "expo-router";

import { Text } from "react-native";

import { IMealList } from "@/interfaces";

import * as S from "./styles";

type Props = {
  item: IMealList;
};

/** TODO:
 * Refeições com datas iguais devem estar agrupadas
 */
export function MealCard({ item }: Props) {
  const navigation = useRouter();

  return (
    <S.Container
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <S.DateTitle>{item?.date}</S.DateTitle>
      <S.Card onPress={() => navigation.push("/(MealDetails)")}>
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
