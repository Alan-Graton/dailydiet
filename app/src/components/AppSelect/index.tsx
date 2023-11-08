import * as S from "./styles";

type Props = {
  title: string;
  type?: S.ButtonStyleProps;
};

export function AppSelect({ title, type = "SUCCESS" }: Props) {
  return (
    <S.Button type={type}>
      <S.Status type={type} />
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
