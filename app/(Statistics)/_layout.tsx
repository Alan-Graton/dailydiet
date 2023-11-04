import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";

export default function StatisticsLayout() {
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
