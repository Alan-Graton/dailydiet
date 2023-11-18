import * as S from "./styles";

import { useRouter } from "expo-router";

// Application Components
import { AppBackButtonIcon } from "@/components/AppBackButtonIcon";

export function Header() {
  const navigation = useRouter();

  return (
    <S.Container>
      <AppBackButtonIcon onPress={() => navigation.back()} />
      <S.Title>Refeição</S.Title>
    </S.Container>
  );
}
