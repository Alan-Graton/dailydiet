import { IMealDTO } from "./config/MealDTO";

import { IStatistics } from "@/contexts/StatistcsContext";

export function getStatistics(meals: IMealDTO[]): IStatistics | null {
  try {
    const inDietMeals = meals.flatMap((meal) => {
      return meal.feedback === "SUCCESS" ? [meal] : [];
    });

    const outDietMeals = meals.flatMap((meal) => {
      return meal.feedback === "ERROR" ? [meal] : [];
    });

    const statistics: IStatistics = {
      percentage: 0,
      bestMealSequence: 0,
      mealCounter: meals.length,
      inDietMeals: inDietMeals.length,
      outDietMeals: outDietMeals.length,
    };

    return statistics;
  } catch (e) {
    console.error("\n\n[getStatistics] Error: ", e);
    return null;
  }
}
