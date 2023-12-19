import { GroupMealsByStatus } from "@/utils/GroupMealsByStatus";
import { IMealDTO } from "./config/MealDTO";

import { IStatistics } from "@/contexts/StatistcsContext";
import { CalculateMealsStatusPercentage } from "@/utils/CalculateMealsStatusPercentage";
import { HandleBestInDietMeals } from "@/utils/HandleBestInDietMeals";

export function getStatistics(meals: IMealDTO[]): IStatistics | null {
  try {
    const groupedMeals = GroupMealsByStatus(meals);

    const handlePercentageCalculation = CalculateMealsStatusPercentage(
      meals.length,
      groupedMeals.inDietMeals.length,
      groupedMeals.outDietMeals.length
    );

    const { bestSequence } = HandleBestInDietMeals(meals);

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
