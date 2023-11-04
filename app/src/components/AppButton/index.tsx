import * as S from "./styles";

type Props = {
  title: string;
};

export function AppButton({ title, ...rest }: Props) {
  return (
    <S.Button {...rest}>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
