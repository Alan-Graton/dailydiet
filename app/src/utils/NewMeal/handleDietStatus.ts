import { IDietStatus } from "@/interfaces";
import { IMealDTO } from "@/storage/config/MealDTO";

export function handleDietStatus(
  status: IDietStatus,
  setSelected: (value: React.SetStateAction<IDietStatus | null>) => void,
  setMeal: (value: React.SetStateAction<IMealDTO>) => void
) {
  setSelected((prevState) => (prevState = status));
  setMeal((prevState) => ({ ...prevState, dietStatus: status }));
}
