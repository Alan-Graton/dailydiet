import * as S from "./styles";

interface Props {
  title: number;
}

export function MealCounter({ title }: Props) {
  return (
    <S.Container>
      <S.TitleCounter>{title}</S.TitleCounter>
      <S.SubTitle>refeições registradas</S.SubTitle>
    </S.Container>
  );
}
