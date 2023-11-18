import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

// Application Components
import { AppTextInput } from "@/components/AppTextInput";
import { AppTextArea } from "@/components/AppTextArea";
import { AppSelect } from "@/components/AppSelect";
import { AppButton } from "@/components/AppButton";

// Screen Components
import { Header } from "./components/Header";

import * as S from "./styles";

export default function NewMeal() {
  return (
    <>
      <S.Container>
        <Stack.Screen options={{ header: () => <Header /> }} />
        <S.Form
          className="Form"
          // style={{
          //   alignItems: "center",
          //   padding: 16,
          //   gap: 30,
          //   flex: 1,
          //   width: "100%",
          // }}
        >
          <View style={{ width: "100%" }}>
            <Text style={{ fontWeight: "bold", alignSelf: "flex-start" }}>
              Nome
            </Text>
            <AppTextInput />
          </View>
          <View style={{ width: "100%" }}>
            <Text style={{ fontWeight: "bold", alignSelf: "flex-start" }}>
              Descrição
            </Text>
            <AppTextArea />
          </View>
          <View className="DateTime" style={{ flexDirection: "row", gap: 15 }}>
            <View style={{ flex: 1, gap: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Data</Text>
              <AppTextInput />
            </View>
            <View style={{ flex: 1, gap: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Horário</Text>
              <AppTextInput />
            </View>
          </View>
          <View className="DietStatus" style={{ marginBottom: "16%" }}>
            <Text style={{ fontWeight: "bold" }}>Status</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <AppSelect title="Sim" />
              <AppSelect title="Não" type="ERROR" />
            </View>
          </View>
          <View
            className="Footer"
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <AppButton title="Cadastrar" />
          </View>
        </S.Form>
      </S.Container>
    </>
  );
}
