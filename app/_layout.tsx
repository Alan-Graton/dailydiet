import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { MealProvider } from "@/contexts/MealContext";
import { StatisticsProvider } from "@/contexts/StatistcsContext";

import { ThemeProvider } from "styled-components/native";
import { THEME } from "@/theme";

export default function RootLayout() {
  return (
    <>
      <ThemeProvider theme={THEME}>
        <MealProvider>
          <StatisticsProvider>
            <Slot />
          </StatisticsProvider>
        </MealProvider>
        <StatusBar animated translucent backgroundColor={THEME.COLORS.WHITE} />
      </ThemeProvider>
    </>
  );
}
