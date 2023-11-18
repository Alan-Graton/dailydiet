import * as S from "./styles";

// Application Components
import { AppBackButtonIcon } from "@/components/AppBackButtonIcon";

export function Header() {
  return (
    <S.Container>
      <AppBackButtonIcon />
      <S.Title>Refeição</S.Title>
    </S.Container>
  );
}
