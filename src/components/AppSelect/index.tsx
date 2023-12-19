import * as S from "./styles";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: S.ButtonStyleProps;
  selected: S.ButtonStyleProps;
};

export function AppSelect({
  title,
  type = "SUCCESS",
  selected = "SUCCESS",
  ...rest
}: Props) {
  return (
    <S.Button selected={selected} type={type} {...rest}>
      <S.Status type={type} />
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
