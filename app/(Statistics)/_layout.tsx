import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";

// Styles
import { ThemeProvider } from "styled-components/native";
import { THEME } from "../src/theme";

export default function StatisticsLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
