import { IMealDTO } from "@/storage/config/MealDTO";

type IMealForm = "date" | "time" | "name" | "description" | "dietStatus";

export function handleSetValues(
  field: IMealForm,
  value: string,
  setMeal: (value: React.SetStateAction<IMealDTO>) => void
) {
  setMeal((prevState) => ({ ...prevState, [field]: value }));
}
