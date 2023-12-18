import { IMealDTO } from "@/storage/config/MealDTO";

interface IMealsBestSequence {
  sequences: Array<number>;
  bestSequence: number;
}

export function HandleBestInDietMeals(meals: IMealDTO[]): IMealsBestSequence {
  let counter: number = 0;
  let bestSequenceList: Array<number> = [];

  for (let meal = 0; meal < meals.length; meal++) {
    if (meals[meal].feedback === "SUCCESS") {
      counter++;
      continue;
    }

    bestSequenceList.push(counter);
    counter = 0;
  }

  return {
    sequences: bestSequenceList,
    bestSequence: Math.max(...bestSequenceList),
  };
}
