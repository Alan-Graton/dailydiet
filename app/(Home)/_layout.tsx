import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";

export default function HomeLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar
        translucent
        animated
        backgroundColor="lightblue"
        style="auto"
      />
    </>
  );
}
