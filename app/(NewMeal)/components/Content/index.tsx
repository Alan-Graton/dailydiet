import { View, Text } from "react-native";

// Application Components
import { AppTextInput } from "@/components/AppTextInput";
import { AppTextArea } from "@/components/AppTextArea";
import { AppSelect } from "@/components/AppSelect";
import { AppButton } from "@/components/AppButton";

// Styles
import * as S from "./styles";

export function Content() {
  return (
    <S.Form>
      <View style={{ width: "100%" }}>
        <S.TextInputLabel>Nome</S.TextInputLabel>
        <AppTextInput />
      </View>
      <View style={{ width: "100%" }}>
        <S.TextInputLabel>Descrição</S.TextInputLabel>
        <AppTextArea />
      </View>
      <S.DateTimeContainer>
        <S.DateTimeForm>
          <Text style={{ fontWeight: "bold" }}>Data</Text>
          <AppTextInput />
        </S.DateTimeForm>
        <S.DateTimeForm>
          <Text style={{ fontWeight: "bold" }}>Horário</Text>
          <AppTextInput />
        </S.DateTimeForm>
      </S.DateTimeContainer>
      <S.DietStatusContainer>
        <Text style={{ fontWeight: "bold" }}>Está dentro da dieta?</Text>
        <S.DietStatusForm>
          <AppSelect title="Sim" />
          <AppSelect title="Não" type="ERROR" />
        </S.DietStatusForm>
      </S.DietStatusContainer>
      <S.Footer>
        <AppButton title="Cadastrar refeição" />
      </S.Footer>
    </S.Form>
  );
}
