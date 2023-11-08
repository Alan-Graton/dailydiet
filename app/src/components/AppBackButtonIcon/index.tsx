import * as S from "./styles";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps;

export function AppBackButtonIcon({ ...rest }: Props) {
  return (
    <S.Button {...rest}>
      <S.BackIcon />
    </S.Button>
  );
}
