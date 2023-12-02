import AsyncStorage from "@react-native-async-storage/async-storage";

import { IMealDTO } from "./config/MealDTO";
import { StorageEntity } from "./config/StorageConfig";

interface Params {
  setLoading: (state: boolean) => void;
  meal: IMealDTO;
}

export async function postMeal(params: Params): Promise<void> {
  try {
    params.setLoading(true);
    console.log("Saving Meal: ", params.meal);
    const body = JSON.stringify(params.meal);
    AsyncStorage.setItem(`${StorageEntity}:${params.meal.date}`, body);
  } catch (e) {
    console.error("[postMeal] Error: ", e);
  } finally {
    params.setLoading(false);
  }
}
