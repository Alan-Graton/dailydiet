import { Stack } from "expo-router/stack";

import UserProfilePic from "../src/assets/UserProfilePic.png";
import AppLogo from "../src/assets/Logo.png";

import { Logo, ProfilePic } from "./styles";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        title: "",
        headerLeft: () => <Logo source={AppLogo} />,
        headerRight: () => <ProfilePic source={UserProfilePic} />,
      }}
    />
  );
}
