import { Stack } from "expo-router/stack";

import { useTheme } from "styled-components/native";

export default function NewMealLayout() {
  const { COLORS } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: COLORS.GRAY_700,
        headerStyle: { backgroundColor: COLORS.GRAY_400 },
        title: "",
      }}
    />
  );
}
