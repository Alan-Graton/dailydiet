import { AppIconButton } from "@/components/AppIconButton";
import * as S from "./styles";

type Props = {
  setDeleteModal: (value: boolean) => void;
};

export function Footer({ setDeleteModal }: Props) {
  return (
    <>
      <S.Container>
        <AppIconButton
          icon="ios-pencil-sharp"
          handleOnPress={() => {
            return;
          }}
          title="Editar refeição"
          color="white"
        />
        <AppIconButton
          icon="trash-bin-outline"
          handleOnPress={() => {
            setDeleteModal(true);
          }}
          outline
          title="Excluir refeição"
        />
      </S.Container>
    </>
  );
}
