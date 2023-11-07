import { AppIconButton } from "@/components/AppIconButton";
import * as S from "./styles";
import { useRouter } from "expo-router";

export function Header() {
  const navigation = useRouter();
  return (
    <S.Container>
      <S.BackButton>
        <S.BackIcon />
      </S.BackButton>
      <S.Title>Nova refeição</S.Title>
    </S.Container>
  );
}
