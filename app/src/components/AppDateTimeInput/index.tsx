import * as S from "./styles";

type Props = {
  mode: "date" | "time";
};

export function AppDateTimeInput({ mode, ...rest }: Props) {
  return <S.Input mode={mode} {...rest} />;
}
