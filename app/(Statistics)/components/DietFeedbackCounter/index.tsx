import {
  ERROR_TEXT,
  SUCCESS_TEXT,
} from "@/constants/DietFeedbackCard/DietFeedbackCardTexts";

import * as S from "./styles";

type Props = {
  title: string;
  type?: S.ContainerStyleProps;
};

export function DietFeedbackCounter({ title, type = "SUCCESS" }: Props) {
  function handleSubTitle(type: S.ContainerStyleProps) {
    if (type === "SUCCESS") return SUCCESS_TEXT;
    if (type === "ERROR") return ERROR_TEXT;
  }

  return (
    <S.Container type={type}>
      <S.CounterTitle>{title}</S.CounterTitle>
      <S.SubTitle>{handleSubTitle(type)}</S.SubTitle>
    </S.Container>
  );
}
