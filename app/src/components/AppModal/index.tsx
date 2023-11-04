import * as S from "./styles";

type Props = {
  message: string;
  cancelTitle: string;
  submitTitle: string;
};

export function AppModal({ message, cancelTitle, submitTitle }: Props) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
      <S.CancelBtn>
        <S.CancelTitle>{cancelTitle}</S.CancelTitle>
      </S.CancelBtn>
      <S.SubmitBtn>
        <S.SubmitTitle>{submitTitle}</S.SubmitTitle>
      </S.SubmitBtn>
    </S.Container>
  );
}
