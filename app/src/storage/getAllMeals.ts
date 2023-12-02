import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageEntity } from "./config/StorageConfig";
import { IMealList } from "@/interfaces";

export async function getAllMeals(): Promise<IMealList[] | void> {
  try {
    const response = await AsyncStorage.getItem(StorageEntity);

    if (!response) return;

    return JSON.parse(response) as IMealList[];
  } catch (e) {
    console.error("\n\n[getAllMeals] Error: ", e);
  }
}
