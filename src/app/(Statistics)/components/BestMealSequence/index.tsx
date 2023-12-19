import * as S from "./styles";

interface Props {
  title: number;
}

export function BestMealSequence({ title }: Props) {
  return (
    <S.Container>
      <S.TitleCounter>{title}</S.TitleCounter>
      <S.SubTitle>melhor sequência de pratos dentro da dieta</S.SubTitle>
    </S.Container>
  );
}
