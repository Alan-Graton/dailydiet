import { IMealDTO } from "@/storage/config/MealDTO";

interface IMealsSequences {
  sequences: Array<number>;
  bestSequence: number;
}

export function HandleBestInDietMeals(meals: IMealDTO[]): IMealsSequences {
  const reduceSequences = meals.reduce(
    (acc, meal) => {
      if (meal.feedback === "SUCCESS") {
        acc.bestSequence++;
      } else {
        acc.sequences.push(acc.bestSequence);
        acc.bestSequence = 0;
      }

      return acc;
    },
    { sequences: [], bestSequence: 0 } as IMealsSequences
  );

  reduceSequences.sequences.push(reduceSequences.bestSequence);

  return reduceSequences;
}
