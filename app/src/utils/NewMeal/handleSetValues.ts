import { IMealDTO } from "@/storage/config/MealDTO";
import { TransformDateTime } from "../TransformDate";

type IMealForm = "date" | "time" | "name" | "description" | "feedback";

export function handleSetValues(
  field: IMealForm,
  value: string | Date,
  setMeal: (value: React.SetStateAction<IMealDTO>) => void
) {
  const handleFieldValue =
    field === "date" || field === "time"
      ? TransformDateTime(value as Date, field)
      : value;

  setMeal((prevState) => ({
    ...prevState,
    [field]: handleFieldValue,
  }));
}
