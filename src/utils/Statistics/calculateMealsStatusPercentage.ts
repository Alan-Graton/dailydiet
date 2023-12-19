import { IFeedback } from "@/interfaces";

interface ISatisticsCalculation {
  percentage: number;
  percentageStatus: IFeedback;
}

export function CalculateMealsStatusPercentage(
  mealsQnt: number,
  inDietMealsQnt: number,
  outDietMealsQnt: number
): ISatisticsCalculation {
  const inDietPercentage = (inDietMealsQnt / mealsQnt) * 100;
  const outDietPercentage = (outDietMealsQnt / mealsQnt) * 100;

  if (inDietPercentage >= outDietPercentage) {
    return {
      percentage: inDietPercentage,
      percentageStatus: "SUCCESS",
    };
  }

  return {
    percentage: outDietPercentage,
    percentageStatus: "ERROR",
  };
}
