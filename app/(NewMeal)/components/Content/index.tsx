import React, { useState } from "react";

import { View, Text } from "react-native";

// Date & Time
import { DateTime } from "luxon";

// Application Components
import { AppTextInput } from "@/components/AppTextInput";
import { AppTextArea } from "@/components/AppTextArea";
import { AppSelect } from "@/components/AppSelect";
import { AppButton } from "@/components/AppButton";
import { AppDateTimePicker } from "@/components/AppDateTimePicker";

// Types
import { IDietStatus } from "@/interfaces";

// Styles
import * as S from "./styles";

export function Content() {
  const [selected, setSelected] = useState<IDietStatus | null>(null);

  const [date, setDate] = useState<Date>(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);

  const [time, setTime] = useState<Date>(new Date());
  const [showTime, setShowTime] = useState<boolean>(false);

  function handleSetSelected(status: IDietStatus) {
    setSelected((prevState) => (prevState = status));
  }

  function handleOnChangeDate(event: any, selectedDate: any) {
    setShowDate(false);
    setDate((prevState) => (prevState = selectedDate));
  }

  function handleOnChangeTime(event: any, selectedTime: any) {
    setShowTime(false);
    setTime((prevState) => (prevState = selectedTime));
  }

  // FIXME: Time is coming with +3H on first render
  function transformDate(date: Date, type: "date" | "time") {
    if (type === "date") {
      return DateTime.fromISO(date.toISOString()).toFormat("dd/MM/yyyy");
    } else {
      return DateTime.fromISO(date.toISOString())
        .setZone("utc")
        .toFormat("HH:mm");
    }
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
          {showDate && (
            <AppDateTimePicker
              value={date}
              mode="date"
              handleOnChange={handleOnChangeDate}
            />
          )}
          <AppTextInput
            onPressIn={() => setShowDate(true)}
            value={transformDate(date, "date")}
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
            value={transformDate(time, "time")}
            caretHidden
          />
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
