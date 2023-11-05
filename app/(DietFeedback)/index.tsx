import { useRouter } from "expo-router";
// Application Components
import { AppButton } from "../src/components/AppButton";

// Constants
import {
  SuccessSubTitle,
  SuccessTitle,
} from "../src/constants/SuccessDietFeedback";
import { ErrorSubTitle, ErrorTitle } from "../src/constants/ErrorDietFeedback";

// Styles
import GoodFeedbackImage from "../src/assets/Good_Feedback.png";
import BadFeedbackImage from "../src/assets/Bad_Feedback.png";
import * as S from "./styles";

type Props = {
  type?: S.TitleStyleProps;
  feedback: "SUCCESS" | "ERROR";
};

// TODO: Use Route params to pass feedback status
// TODO: Apply boldness to middle texts the right way, please
export default function DietFeedback({ feedback = "SUCCESS" }: Props) {
  const navigation = useRouter();
  return (
    <S.Container>
      <S.FeedbackTexts>
        <S.Title type={feedback}>
          {feedback === "SUCCESS" ? SuccessTitle : ErrorTitle}
        </S.Title>
        <S.SubTitle>
          {feedback === "SUCCESS" ? SuccessSubTitle : ErrorSubTitle}
        </S.SubTitle>
      </S.FeedbackTexts>
      <S.Image
        source={feedback === "SUCCESS" ? GoodFeedbackImage : BadFeedbackImage}
      />
      <AppButton
        title="Ir para a página inicial"
        onPress={() => navigation.push("/(Home)")}
      />
    </S.Container>
  );
}
