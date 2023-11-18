import { Stack } from "expo-router";

import { useTheme } from "styled-components/native";

export default function MealDetailsLayout() {
  const { COLORS } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: COLORS.GRAY_700,
      }}
    />
  );
}
