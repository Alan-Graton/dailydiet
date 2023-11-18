import { Text } from "react-native";

import * as S from "./styles";
import { useRouter } from "expo-router";

type Props = {
  date: string;
  time: string;
  meal: string;
  type?: S.FeedBackBallStyleProps;
};

export function MealCard({ date, time, meal, type = "SUCCESS" }: Props) {
  const navigation = useRouter();

  return (
    <S.Container
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <S.DateTitle>{date}</S.DateTitle>
      <S.Card onPress={() => navigation.push("/(MealDetails)")}>
        <S.CardContent>
          <S.TimeTitle>{time}</S.TimeTitle>
          <Text>|</Text>
          <S.MealName>{meal}</S.MealName>
        </S.CardContent>
        <S.FeedBackBall type={type} />
      </S.Card>
    </S.Container>
  );
}
