import AsyncStorage from "@react-native-async-storage/async-storage";

import { IMealDTO } from "./config/MealDTO";
import { StorageEntity } from "./config/StorageConfig";

type Args = IMealDTO;

export async function postMeal(meal: Args): Promise<void> {
  try {
    console.log("\n\nSaving Meal: ", meal);

    const body = JSON.stringify(meal);
    AsyncStorage.setItem(StorageEntity, body);
  } catch (e) {
    console.error("\n\n[postMeal] Error: ", e);
  }
}
