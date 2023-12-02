import AsyncStorage from "@react-native-async-storage/async-storage";

import { IMealDTO } from "./config/MealDTO";
import { StorageEntity } from "./config/StorageConfig";
import { getAllMeals } from "./getAllMeals";

type Args = IMealDTO;

export async function postMeal(meal: Args): Promise<void> {
  try {
    const allMeals = await getAllMeals();

    const areAllMealsArray = Array.isArray(allMeals) && allMeals.push(meal);

    const body = !areAllMealsArray ? [meal] : allMeals;

    await AsyncStorage.setItem(StorageEntity, JSON.stringify(body));
  } catch (e) {
    console.error("\n\n[postMeal] Error: ", e);
  }
}
