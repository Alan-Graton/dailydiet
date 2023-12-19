import AsyncStorage from "@react-native-async-storage/async-storage";

import { IMealDTO } from "./config/MealDTO";
import { StorageEntity } from "./config/StorageConfig";

import { getAllMeals } from "./getAllMeals";

export async function deleteMeal(meal: IMealDTO): Promise<void> {
  try {
    const allMeals = await getAllMeals();

    if (!allMeals) return;

    const persistCreatedMeals = allMeals.filter(
      (meals) => meals.id !== meal.id
    );

    await AsyncStorage.setItem(
      StorageEntity,
      JSON.stringify(persistCreatedMeals)
    );
  } catch (e) {
    console.error("\n\n[deleteMeal] Error: ", e);
    return;
  }
}
