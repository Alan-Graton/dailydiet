import { SelectedMealType } from "@/contexts/MealContext";

export async function putMeal(
  meal: SelectedMealType,
  setLoading: (value: React.SetStateAction<boolean>) => void
) {
  try {
    setLoading(true);
    console.log("\n\n[putMeal] Updating Meal: ", meal);
  } catch (e) {
    console.error("\n\n[putMeal] Error: ", e);
  } finally {
    setLoading(false);
  }
}
