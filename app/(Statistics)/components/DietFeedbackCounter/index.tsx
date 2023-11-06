import {
  ERROR_TEXT,
  SUCCESS_TEXT,
} from "@/constants/DietFeedbackCard/DietFeedbackCardTexts";
import * as S from "./styles";

type Props = {
  type?: "SUCCESS" | "ERROR";
};

export function DietFeedbackCounter({ type = "SUCCESS" }: Props) {
  function handleSubTitle(type: "SUCCESS" | "ERROR") {
    if (type === "SUCCESS") return SUCCESS_TEXT;
    if (type === "ERROR") return ERROR_TEXT;
  }

  return (
    <S.Container>
      <S.CounterTitle></S.CounterTitle>
      <S.SubTitle>{handleSubTitle(type)}</S.SubTitle>
    </S.Container>
  );
}
