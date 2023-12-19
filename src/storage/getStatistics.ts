import { IMealDTO } from "./config/MealDTO";

import { IStatistics } from "@/contexts/StatistcsContext";

import { calculateMealsStatusPercentage } from "@/utils/Statistics/calculateMealsStatusPercentage";
import { handleBestInDietMeals } from "@/utils/Statistics/handleBestInDietMeals";
import { groupMealsByStatus } from "@/utils/Statistics/groupMealsByStatus";

export function getStatistics(meals: IMealDTO[]): IStatistics | null {
  try {
    const groupedMeals = groupMealsByStatus(meals);

    const handlePercentageCalculation = calculateMealsStatusPercentage(
      meals.length,
      groupedMeals.inDietMeals.length,
      groupedMeals.outDietMeals.length
    );

    const { bestSequence } = handleBestInDietMeals(meals);

    const statistics: IStatistics = {
      percentage: Math.floor(handlePercentageCalculation.percentage),
      percentageStatus: handlePercentageCalculation.percentageStatus,
      bestMealSequence: bestSequence,
      mealCounter: meals.length,
      inDietMeals: groupedMeals.inDietMeals.length,
      outDietMeals: groupedMeals.outDietMeals.length,
    };

    return statistics;
  } catch (e) {
    console.error("\n\n[getStatistics] Error: ", e);
    return null;
  }
}
