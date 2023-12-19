import {
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import { AppButton } from "@/components/AppButton";

import { SuccessSubTitle, SuccessTitle } from "@/constants/SuccessDietFeedback";
import { ErrorSubTitle, ErrorTitle } from "@/constants/ErrorDietFeedback";

import GoodFeedbackImage from "@/assets/Good_Feedback.png";
import BadFeedbackImage from "@/assets/Bad_Feedback.png";

import * as S from "./styles";

import { IFeedback } from "@/interfaces";

// TODO: Use Route params to pass feedback status
// TODO: Apply boldness to middle texts the right way, please
export default function DietFeedback() {
  const { feedback }: { feedback: IFeedback } = useGlobalSearchParams();

  return (
    <S.Container>
      <S.Header>
        <S.Title type={feedback}>
          {feedback === "SUCCESS" ? SuccessTitle : ErrorTitle}
        </S.Title>
        <S.SubTitle>
          {feedback === "SUCCESS" ? SuccessSubTitle : ErrorSubTitle}
        </S.SubTitle>
      </S.Header>
      <S.Content>
        <S.Image
          source={feedback === "SUCCESS" ? GoodFeedbackImage : BadFeedbackImage}
        />
      </S.Content>
      <S.Footer>
        <AppButton
          title="Ir para a página inicial"
          onPress={() => router.push("/(Home)/")}
        />
      </S.Footer>
    </S.Container>
  );
}
