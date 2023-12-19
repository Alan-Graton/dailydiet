import React from "react";
import { Stack, useRouter } from "expo-router";

import { MealContext } from "@/contexts/MealContext";

import { AppModal } from "@/components/AppModal";

import { deleteMeal } from "@/storage/deleteMeal";

import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

import * as S from "./styles";

export default function MealDetails() {
  const navigation = useRouter();

  const { selectedMeal } = React.useContext(MealContext);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);

  async function onSubmit() {
    if (selectedMeal) {
      setLoading(true);
      await deleteMeal(selectedMeal);

      setDeleteModal(false);
      navigation.push("/(Home)");
      setLoading(false);
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
          loading={loading}
        />
      </S.Container>
    </>
  );
}
