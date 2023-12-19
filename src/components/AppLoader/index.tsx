import * as S from "./styles";

type Props = {
  loading: boolean;
};

export function AppLoader({ loading = true }: Props) {
  return (
    <>
      {loading && (
        <S.Container>
          <S.Loader animating={loading} size={32} color="black" />
        </S.Container>
      )}
    </>
  );
}
