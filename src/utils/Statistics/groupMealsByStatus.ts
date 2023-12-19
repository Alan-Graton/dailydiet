import { IMealDTO } from "@/storage/config/MealDTO";

export function groupMealsByStatus(meals: IMealDTO[]) {
  const inDietMeals = meals.flatMap((meal) => {
    return meal.feedback === "SUCCESS" ? [meal] : [];
  });

  const outDietMeals = meals.flatMap((meal) => {
    return meal.feedback === "ERROR" ? [meal] : [];
  });

  return { inDietMeals, outDietMeals };
}
