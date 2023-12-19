import AsyncStorage from "@react-native-async-storage/async-storage";

import { StorageEntity } from "./config/StorageConfig";
import { IMealDTO } from "./config/MealDTO";

export async function getAllMeals(): Promise<IMealDTO[] | void> {
  try {
    const response = await AsyncStorage.getItem(StorageEntity);

    if (!response) return;

    return JSON.parse(response) as IMealDTO[];
  } catch (e) {
    console.error("\n\n[getAllMeals] Error: ", e);
  }
}
