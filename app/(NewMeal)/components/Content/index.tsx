import React, { useState } from "react";

import { View, Text } from "react-native";

import { AppTextInput } from "@/components/AppTextInput";
import { AppTextArea } from "@/components/AppTextArea";
import { AppSelect } from "@/components/AppSelect";
import { AppButton } from "@/components/AppButton";
import { AppDateTimePicker } from "@/components/AppDateTimePicker";
import { AppLoader } from "@/components/AppLoader";

import { IMealDTO } from "@/storage/config/MealDTO";
import { postMeal } from "@/storage/postMeal";

import { TransformDateTime } from "@/utils/TransformDate";
import { handleFeedback } from "@/utils/NewMeal/handleFeedback";
import { handleSetValues } from "@/utils/NewMeal/handleSetValues";

import { IFeedback } from "@/interfaces";

import * as S from "./styles";

export function Content() {
  const [selected, setSelected] = useState<IFeedback | null>(null);

  const [date, setDate] = useState<Date>(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);

  const [time, setTime] = useState<Date>(new Date());
  const [showTime, setShowTime] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [meal, setMeal] = useState<IMealDTO>({
    date: "",
    time: "",
    name: "",
    description: "",
    feedback: "SUCCESS",
  });

  async function handleSubmitMeal() {
    setLoading(true);
    await postMeal(meal);
    setLoading(false);
  }

  function handleOnChangeDate(event: any, selectedDate: any) {
    setShowDate(false);
    setDate((prevState) => (prevState = selectedDate));
    handleSetValues("date", selectedDate, setMeal);
  }

  function handleOnChangeTime(event: any, selectedTime: any) {
    setShowTime(false);
    setTime((prevState) => (prevState = selectedTime));
    handleSetValues("time", selectedTime, setMeal);
  }

  return (
    <S.Form>
      <View style={{ width: "100%" }}>
        <S.TextInputLabel>Nome</S.TextInputLabel>
        <AppTextInput
          onChangeText={(text) => handleSetValues("name", text, setMeal)}
        />
      </View>
      <View style={{ width: "100%" }}>
        <S.TextInputLabel>Descrição</S.TextInputLabel>
        <AppTextArea
          onChangeText={(text) => handleSetValues("description", text, setMeal)}
        />
      </View>
      <S.DateTimeContainer>
        <S.DateTimeForm>
          <Text style={{ fontWeight: "bold" }}>Data</Text>
          {showDate && (
            <AppDateTimePicker
              value={date}
              mode="date"
              handleOnChange={handleOnChangeDate}
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
              handleOnChange={handleOnChangeTime}
            />
          )}
          <AppTextInput
            onPressIn={() => setShowTime(true)}
            value={TransformDateTime(time, "time")}
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
        {!loading && (
          <AppButton title="Cadastrar refeição" onPress={handleSubmitMeal} />
        )}
      </S.Footer>
    </S.Form>
  );
}
