import { useRouter } from "expo-router";

import * as S from "./styles";

type Props = {
  percentage: string;
};

export function Header({ percentage }: Props) {
  const navigation = useRouter();

  function handleGoBack() {
    if (navigation.canGoBack()) {
      navigation.back();
    }
  }

  return (
    <S.Container type="SUCCESS">
      <S.BackButton onPress={() => handleGoBack()}>
        <S.BackIcon type="SUCCESS" />
      </S.BackButton>
      <S.PercentageTitle>{percentage}</S.PercentageTitle>
      <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
    </S.Container>
  );
}
