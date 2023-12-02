import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageEntity } from "./config/StorageConfig";

export async function getAllMeals(): Promise<any> {
  try {
    const response = await AsyncStorage.getItem(StorageEntity);

    if (!response) return;

    return JSON.parse(response);
  } catch (e) {
    console.error("\n\n[getAllMeals] Error: ", e);
  }
}
