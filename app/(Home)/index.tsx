import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const navigation = useRouter();
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Text>I'm the freaking Home Screen</Text>
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
