import React, { useState } from "react";
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
  const { selectedMeal } = React.useContext(MealContext);

  const [selected, setSelected] = useState<IFeedback | null>(null);

  const [date, setDate] = useState<Date>(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);

  const [time, setTime] = useState<Date>(new Date());
  const [showTime, setShowTime] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const BTN_TITLE = selectedMeal ? "Salvar alterações" : "Cadastrar refeição";

  const [meal, setMeal] = useState<IMealDTO>({
    date: "",
    time: "",
    name: "",
    description: "",
    feedback: "SUCCESS",
  });

  // TODO: Após salvar, alterar, redirecionar para a tela de Feedback
  async function handleSubmitMeal() {
    if (!selectedMeal) {
      await postMeal(meal, setLoading);
      return;
    }

    await putMeal(selectedMeal, setLoading);
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
          value={selectedMeal ? selectedMeal.name : meal.name}
        />
      </View>
      <View style={{ width: "100%" }}>
        <S.TextInputLabel>Descrição</S.TextInputLabel>
        <AppTextArea
          onChangeText={(text) => handleSetValues("description", text, setMeal)}
          value={selectedMeal ? selectedMeal.description : meal.description}
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
            value={
              selectedMeal ? selectedMeal.date : TransformDateTime(date, "date")
            }
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
            value={
              selectedMeal ? selectedMeal.time : TransformDateTime(time, "time")
            }
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
            selected={selectedMeal ? selectedMeal.feedback : selected}
          />
          <AppSelect
            title="Não"
            type="ERROR"
            onPress={() => handleFeedback("ERROR", setSelected, setMeal)}
            selected={selectedMeal ? selectedMeal.feedback : selected}
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
