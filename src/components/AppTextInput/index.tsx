import * as S from "./styles";
import { useTheme } from "styled-components/native";

import { TextInputProps } from "react-native";

type Props = TextInputProps;

export function AppTextInput({ ...rest }: Props) {
  const { COLORS } = useTheme();

  return <S.Input {...rest} selectionColor={COLORS.GRAY_700} />;
}
