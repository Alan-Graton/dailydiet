import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { MealCard } from "./components/MealCard";
import { StatisticsCard } from "./components/StatisticsCard";
import { useTheme } from "styled-components/native";

export default function Home() {
  const navigation = useRouter();
  const { COLORS } = useTheme();
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.WHITE,
        }}
      >
        <MealCard />
        <StatisticsCard />
        <TouchableOpacity
          onPress={() => navigation.push("/(Statistics)")}
          style={{
            width: 150,
            height: 50,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 26 }}>Try me!!!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
