import * as S from "./styles";

import { View, Text } from "react-native";

import { Modal } from "react-native-paper";
import { AppButton } from "../AppButton";

type Props = {
  visible: boolean;
  setVisible: (state: boolean) => void;
  message: string;
  cancelTitle: string;
  submitTitle: string;
  handleOnSubmit: () => void;
};

export function AppModal({
  visible,
  setVisible,
  message,
  cancelTitle,
  submitTitle,
  handleOnSubmit,
  ...rest
}: Props) {
  return (
    <Modal
      visible={visible}
      onDismiss={() => setVisible(false)}
      dismissable
      dismissableBackButton
      contentContainerStyle={{ alignItems: "center" }}
      {...rest}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "90%",
          height: "65%",
          justifyContent: "space-around",
          padding: 16,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
          Deseja realmente excluir o registro de refeição?
        </Text>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            gap: 10,
          }}
        >
          <AppButton title="Cancelar" outline />
          <AppButton title="Sim, excluir" />
        </View>
      </View>
    </Modal>
  );
}
