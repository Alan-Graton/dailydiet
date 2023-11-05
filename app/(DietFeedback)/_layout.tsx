import { Stack } from "expo-router";

export default function DietFeedbackLayout() {
  return (
    <Stack
      initialRouteName="(Home)"
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
