import React from "react";
import { Stack, useRouter } from "expo-router";

import { MealContext } from "@/contexts/MealContext";

import { AppModal } from "@/components/AppModal";

import { deleteMeal } from "@/storage/deleteMeal";

// Screen Components
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

import * as S from "./styles";

export default function MealDetails() {
  const navigation = useRouter();

  const { selectedMeal } = React.useContext(MealContext);

  const [deleteModal, setDeleteModal] = React.useState(false);

  async function onSubmit() {
    if (selectedMeal) {
      await deleteMeal(selectedMeal);
      setDeleteModal(false);
      navigation.push("/(Home)");
    }
  }

  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <S.Container>
        <Content />
        <Footer setDeleteModal={setDeleteModal} />
        <AppModal
          visible={deleteModal}
          setVisible={setDeleteModal}
          message="Deseja realmente deletar o registro de refeição?"
          cancelTitle="Cancelar"
          submitTitle="Sim, excluir"
          handleOnSubmit={onSubmit}
        />
      </S.Container>
    </>
  );
}
