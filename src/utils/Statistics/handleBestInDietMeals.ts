import { IMealDTO } from "@/storage/config/MealDTO";

interface IBestMealSequence {
  sequences: Array<number>;
  bestSequence: number;
}

export function handleBestInDietMeals(meals: IMealDTO[]): IBestMealSequence {
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
    { sequences: [], bestSequence: 0 } as IBestMealSequence
  );

  reduceSequences.sequences.push(reduceSequences.bestSequence);
  reduceSequences.bestSequence = Math.max(...reduceSequences.sequences);

  return {
    sequences: reduceSequences.sequences,
    bestSequence: reduceSequences.bestSequence,
  };
}
