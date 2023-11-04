import { Ionicons } from "@expo/vector-icons";

import * as S from "./styles";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  title: string;
};

export function AppIconButton({ icon, title, color, ...rest }: Props) {
  return (
    <S.Container>
      <S.Button {...rest}>
        <S.Icon name={icon} size={28} color={color} />
        <S.Title>{title}</S.Title>
      </S.Button>
    </S.Container>
  );
}
