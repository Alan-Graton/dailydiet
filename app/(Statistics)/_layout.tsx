import { Stack } from "expo-router/stack";

import { useTheme } from "styled-components/native";

export default function StatisticsLayout() {
  const { COLORS } = useTheme();
  /** FIXME: Back Arrow not being rendered */
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTintColor: COLORS.GRAY_700,
        title: "Diet Statistics",
      }}
    />
  );
}
