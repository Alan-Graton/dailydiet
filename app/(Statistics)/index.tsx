import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Statistics() {
  const navigation = useRouter();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>I'm the big F-ing Statistics Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.back()}
        style={{
          width: 150,
          height: 50,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 26 }}>I'll be back</Text>
      </TouchableOpacity>
    </View>
  );
}
