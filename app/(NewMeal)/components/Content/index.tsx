import React, { useState } from "react";

import { View, Text } from "react-native";

import { AppTextInput } from "@/components/AppTextInput";
import { AppTextArea } from "@/components/AppTextArea";
import { AppSelect } from "@/components/AppSelect";
import { AppButton } from "@/components/AppButton";
import { AppDateTimePicker } from "@/components/AppDateTimePicker";

import { postMeal } from "@/storage/postMeal";

import { TransformDate } from "@/utils/TransformDate";
import { handleDietStatus } from "@/utils/NewMeal/handleDietStatus";
import { handleSetValues } from "@/utils/NewMeal/handleSetValues";

import { IDietStatus } from "@/interfaces";
import { IMealDTO } from "@/storage/config/MealDTO";

import * as S from "./styles";

export function Content() {
  const [selected, setSelected] = useState<IDietStatus | null>(null);

  const [date, setDate] = useState<Date>(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);

  const [time, setTime] = useState<Date>(new Date());
  const [showTime, setShowTime] = useState<boolean>(false);

  const [laoding, setLoading] = useState<boolean>(false);

  const [meal, setMeal] = useState<IMealDTO>({
    date: "",
    time: "",
    name: "",
    description: "",
    dietStatus: "SUCCESS",
  });

  async function handleSubmitMeal() {
    const body = { setLoading: setLoading, meal: meal };
    await postMeal(body);
  }

  function handleOnChangeDate(event: any, selectedDate: any) {
    setShowDate(false);
    setDate((prevState) => (prevState = selectedDate));
    setMeal((prevState) => ({
      ...prevState,
      date: TransformDate(selectedDate, "date"),
    }));
  }

  function handleOnChangeTime(event: any, selectedTime: any) {
    setShowTime(false);
    setTime((prevState) => (prevState = selectedTime));
    setMeal((prevState) => ({
      ...prevState,
      time: TransformDate(selectedTime, "time"),
    }));
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
            value={TransformDate(date, "date")}
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
            value={TransformDate(time, "time")}
            caretHidden
          />
        </S.DateTimeForm>
      </S.DateTimeContainer>
      <S.DietStatusContainer>
        <Text style={{ fontWeight: "bold" }}>Está dentro da dieta?</Text>
        <S.DietStatusForm>
          <AppSelect
            title="Sim"
            onPress={() => handleDietStatus("SUCCESS", setSelected, setMeal)}
            selected={selected}
          />
          <AppSelect
            title="Não"
            type="ERROR"
            onPress={() => handleDietStatus("ERROR", setSelected, setMeal)}
            selected={selected}
          />
        </S.DietStatusForm>
      </S.DietStatusContainer>
      <S.Footer>
        <AppButton title="Cadastrar refeição" onPress={handleSubmitMeal} />
      </S.Footer>
    </S.Form>
  );
}
