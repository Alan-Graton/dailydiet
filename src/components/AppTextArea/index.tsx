import * as S from "./styles";
import { useTheme } from "styled-components/native";

import { TextInputProps } from "react-native";

type Props = TextInputProps;

export function AppTextArea({ ...rest }: Props) {
  const { COLORS } = useTheme();
  return <S.Input selectionColor={COLORS.GRAY_700} multiline {...rest} />;
}
