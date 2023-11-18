import { Ionicons } from "@expo/vector-icons";

import * as S from "./styles";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
  title: string;
  outline?: boolean;
  handleOnPress: () => void;
};

export function AppIconButton({
  icon,
  color = "black",
  title,
  outline = false,
  handleOnPress,
}: Props) {
  return (
    <S.Container>
      <S.Button outline={outline} onPress={handleOnPress}>
        <S.Icon name={icon} size={28} color={color} />
        <S.Title outline={outline}>{title}</S.Title>
      </S.Button>
    </S.Container>
  );
}
