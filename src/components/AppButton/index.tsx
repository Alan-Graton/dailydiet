import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  outline?: boolean;
};

export function AppButton({ title, outline = false, ...rest }: Props) {
  return (
    <S.Button outline={outline} {...rest}>
      <S.Title outline={outline}>{title}</S.Title>
    </S.Button>
  );
}
