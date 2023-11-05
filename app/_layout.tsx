import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
// Styles
import { ThemeProvider } from "styled-components/native";
import { THEME } from "./src/theme";

export default function RootLayout() {
  return (
    <>
      <ThemeProvider theme={THEME}>
        <Slot />
        <StatusBar animated translucent backgroundColor={THEME.COLORS.WHITE} />
      </ThemeProvider>
    </>
  );
}
