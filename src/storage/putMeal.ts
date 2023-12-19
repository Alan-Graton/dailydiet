import { SelectedMealType } from "@/contexts/MealContext";

import { getAllMeals } from "./getAllMeals";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageEntity } from "./config/StorageConfig";

export async function putMeal(meal: SelectedMealType): Promise<void> {
  try {
    const allMeals = await getAllMeals();

    if (!allMeals) return;

    const persistCreatedMeals = allMeals.filter((el) => el.id !== meal.id);
    persistCreatedMeals.push(meal);

    await AsyncStorage.setItem(
      StorageEntity,
      JSON.stringify(persistCreatedMeals)
    );
  } catch (e) {
    console.error("\n\n[putMeal] Error: ", e);
    return;
  }
}
