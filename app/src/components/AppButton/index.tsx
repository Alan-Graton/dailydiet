import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function AppButton({ title, ...rest }: Props) {
  return (
    <S.Button {...rest}>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
