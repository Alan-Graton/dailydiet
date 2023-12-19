import { Stack } from "expo-router/stack";

import { useTheme } from "styled-components/native";

export default function StatisticsLayout() {
  const { COLORS } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTintColor: COLORS.GRAY_700,
      }}
    />
  );
}
