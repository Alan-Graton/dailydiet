import * as S from "./styles";
import { useRouter } from "expo-router";

import { AppBackButtonIcon } from "@/components/AppBackButtonIcon";

export function Header() {
  const navigation = useRouter();
  return (
    <S.Container>
      <AppBackButtonIcon onPress={() => navigation.back()} />
      <S.Title>Nova refeição</S.Title>
    </S.Container>
  );
}
