import React, { useState } from "react";
import { useRouter } from "expo-router";

import { MealContext } from "@/contexts/MealContext";

import { View, Text } from "react-native";

import { AppTextInput } from "@/components/AppTextInput";
import { AppTextArea } from "@/components/AppTextArea";
import { AppSelect } from "@/components/AppSelect";
import { AppButton } from "@/components/AppButton";
import { AppDateTimePicker } from "@/components/AppDateTimePicker";
import { AppLoader } from "@/components/AppLoader";

import { IMealDTO } from "@/storage/config/MealDTO";
import { postMeal } from "@/storage/postMeal";
import { putMeal } from "@/storage/putMeal";

import { TransformDateTime } from "@/utils/TransformDate";
import { handleFeedback } from "@/utils/NewMeal/handleFeedback";
import { handleSetValues } from "@/utils/NewMeal/handleSetValues";

import { IFeedback } from "@/interfaces";

import * as S from "./styles";

export function Content() {
  const navigation = useRouter();

  const { selectedMeal } = React.useContext(MealContext);

  const hasSelectedMeal = selectedMeal && true;

  const [selected, setSelected] = useState<IFeedback | null>(
    hasSelectedMeal ? selectedMeal.feedback : null
  );

  const [date, setDate] = useState<Date>(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);

  const [time, setTime] = useState<Date>(new Date());
  const [showTime, setShowTime] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const DEFAULT_MEAL: IMealDTO = {
    date: "",
    time: "",
    name: "",
    description: "",
    feedback: "SUCCESS",
  };

  const BTN_TITLE = hasSelectedMeal
    ? "Salvar alterações"
    : "Cadastrar refeição";

  const [meal, setMeal] = useState<IMealDTO>(
    hasSelectedMeal ? selectedMeal : DEFAULT_MEAL
  );

  // TODO: Após salvar, alterar, redirecionar para a tela de Feedback
  async function handleSubmitMeal() {
    if (!hasSelectedMeal) {
      await postMeal(meal, setLoading);
      navigation.push(`/(DietFeedback)/`);
      return;
    }

    await putMeal(meal, setLoading);
    navigation.push(`/(DietFeedback)/`);
  }

  function handleOnChageDateTime(event: any, selectedValue: any) {
    if (showDate) {
      setShowDate(false);
      setDate((prevState) => (prevState = selectedValue));
      handleSetValues("date", selectedValue, setMeal);
    } else if (showTime) {
      setShowTime(false);
      setTime((prevState) => (prevState = selectedValue));
      handleSetValues("time", selectedValue, setMeal);
    }
  }

  return (
    <S.Form>
      <View style={{ width: "100%" }}>
        <S.TextInputLabel>Nome</S.TextInputLabel>
        <AppTextInput
          onChangeText={(text) => handleSetValues("name", text, setMeal)}
          value={meal.name}
        />
      </View>
      <View style={{ width: "100%" }}>
        <S.TextInputLabel>Descrição</S.TextInputLabel>
        <AppTextArea
          onChangeText={(text) => handleSetValues("description", text, setMeal)}
          value={meal.description}
        />
      </View>
      <S.DateTimeContainer>
        <S.DateTimeForm>
          <Text style={{ fontWeight: "bold" }}>Data</Text>
          {showDate && (
            <AppDateTimePicker
              value={date}
              mode="date"
              handleOnChange={handleOnChageDateTime}
            />
          )}
          <AppTextInput
            onPressIn={() => setShowDate(true)}
            value={TransformDateTime(date, "date")}
            caretHidden
          />
        </S.DateTimeForm>
        <S.DateTimeForm>
          <Text style={{ fontWeight: "bold" }}>Horário</Text>
          {showTime && (
            <AppDateTimePicker
              value={time}
              mode="time"
              handleOnChange={handleOnChageDateTime}
            />
          )}
          <AppTextInput
            onPressIn={() => setShowTime(true)}
            value={selectedMeal ? meal.time : TransformDateTime(time, "time")}
            caretHidden
          />
        </S.DateTimeForm>
      </S.DateTimeContainer>
      <S.FeedbackContainer>
        <Text style={{ fontWeight: "bold" }}>Está dentro da dieta?</Text>
        <S.FeedbackForm>
          <AppSelect
            title="Sim"
            onPress={() => handleFeedback("SUCCESS", setSelected, setMeal)}
            selected={selected}
          />
          <AppSelect
            title="Não"
            type="ERROR"
            onPress={() => handleFeedback("ERROR", setSelected, setMeal)}
            selected={selected}
          />
        </S.FeedbackForm>
      </S.FeedbackContainer>
      <S.Footer>
        <AppLoader loading={loading} />
        {!loading && <AppButton title={BTN_TITLE} onPress={handleSubmitMeal} />}
      </S.Footer>
    </S.Form>
  );
}
