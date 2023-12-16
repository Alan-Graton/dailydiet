import { useRouter } from "expo-router";

import { IFeedback } from "@/interfaces";

import * as S from "./styles";

type Props = {
  percentage: string;
  status: IFeedback;
};

export function Header({ percentage, status = "SUCCESS" }: Props) {
  const navigation = useRouter();

  function handleGoBack() {
    if (navigation.canGoBack()) {
      navigation.back();
    }
  }

  return (
    <S.Container type={status}>
      <S.BackButton onPress={() => handleGoBack()}>
        <S.BackIcon type={status} />
      </S.BackButton>
      <S.PercentageTitle>{percentage}</S.PercentageTitle>
      <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
    </S.Container>
  );
}
