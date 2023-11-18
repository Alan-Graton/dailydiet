import { Stack } from "expo-router";

// Screen Components
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

import * as S from "./styles";

export default function MealDetails() {
  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <S.Container>
        <Content />
        <Footer />
      </S.Container>
    </>
  );
}
