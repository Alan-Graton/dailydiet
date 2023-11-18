import { AppIconButton } from "@/components/AppIconButton";
import * as S from "./styles";

export function Footer() {
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
            return;
          }}
          outline
          title="Excluir refeição"
        />
      </S.Container>
    </>
  );
}
