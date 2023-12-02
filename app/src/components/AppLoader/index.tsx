import * as S from "./styles";

type Props = {
  loading: boolean;
};

export function AppLoader({ loading = false }: Props) {
  return (
    <>
      {loading && (
        <S.Container>
          <S.Loader animating={loading} />
        </S.Container>
      )}
    </>
  );
}
