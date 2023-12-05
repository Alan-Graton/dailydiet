import { SelectedMealType } from "@/contexts/MealContext";

export async function putMeal(meal: SelectedMealType) {
  try {
    console.log("\n\n[putMeal] Updating Meal: ", meal);
  } catch (e) {
    console.error("\n\n[putMeal] Error: ", e);
  }
}
