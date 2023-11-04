import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

import * as S from "./styles";

export default function Statistics() {
  const navigation = useRouter();
  return (
    <S.Container>
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
    </S.Container>
  );
}
