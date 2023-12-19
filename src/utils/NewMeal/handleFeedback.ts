import { IFeedback } from "@/interfaces";
import { IMealDTO } from "@/storage/config/MealDTO";

export function handleFeedback(
  status: IFeedback,
  setSelected: (value: React.SetStateAction<IFeedback | null>) => void,
  setMeal: (value: React.SetStateAction<IMealDTO>) => void
) {
  setSelected((prevState) => (prevState = status));
  setMeal((prevState) => ({ ...prevState, feedback: status }));
}
