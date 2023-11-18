import DateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  value: Date;
  mode: "date" | "time";
  handleOnChange: (event: any, selectedValue: any) => void;
}

export function AppDateTimePicker({ value, mode, handleOnChange }: Props) {
  return (
    <DateTimePicker
      value={value}
      mode={mode}
      is24Hour={mode === "time" ? true : false}
      onChange={handleOnChange}
      locale="pt-BR"
      timeZoneOffsetInMinutes={0 * 60}
    />
  );
}
