import React from "react";

import { View, Text } from "react-native";

// Application Components
import { AppTextInput } from "@/components/AppTextInput";
import { AppTextArea } from "@/components/AppTextArea";
import { AppSelect } from "@/components/AppSelect";
import { AppButton } from "@/components/AppButton";

// Types
import { IDietStatus } from "@/interfaces";

// Styles
import * as S from "./styles";

export function Content() {
  const [selected, setSelected] = React.useState<IDietStatus | null>(null);

  function handleSetSelected(status: IDietStatus) {
    setSelected((prevState) => (prevState = status));
  }

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
          <AppSelect
            title="Sim"
            onPress={() => handleSetSelected("SUCCESS")}
            selected={selected}
          />
          <AppSelect
            title="Não"
            type="ERROR"
            onPress={() => handleSetSelected("ERROR")}
            selected={selected}
          />
        </S.DietStatusForm>
      </S.DietStatusContainer>
      <S.Footer>
        <AppButton title="Cadastrar refeição" />
      </S.Footer>
    </S.Form>
  );
}
