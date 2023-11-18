import * as S from "./styles";

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
      <S.ModalContent>
        <S.Message>{message}</S.Message>
        <S.Actions>
          <AppButton
            title={cancelTitle}
            outline
            onPress={() => setVisible(false)}
          />
          <AppButton title={submitTitle} onPress={handleOnSubmit} />
        </S.Actions>
      </S.ModalContent>
    </Modal>
  );
}
