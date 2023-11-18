import React from "react";

import { Stack } from "expo-router";

import { AppModal } from "@/components/AppModal";

// Screen Components
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

import * as S from "./styles";

export default function MealDetails() {
  const [deleteModal, setDeleteModal] = React.useState(false);

  function onSubmit() {
    setDeleteModal(false);
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
