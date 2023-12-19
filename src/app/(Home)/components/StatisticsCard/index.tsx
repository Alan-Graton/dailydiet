import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = TouchableOpacityProps &
  S.StatisticsButtonStyleProps & {
    title: string;
    subtitle: string;
  };

export function StatisticsCard({
  type = "SUCCESS",
  title,
  subtitle,
  ...rest
}: Props) {
  return (
    <S.StatisticsButton type={type} {...rest}>
      <S.OpenIcon size={24} type={type} />
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.StatisticsButton>
  );
}
