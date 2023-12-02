import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageEntity } from "./config/StorageConfig";
import { IMealList } from "@/interfaces";

type Args = React.Dispatch<React.SetStateAction<IMealList[]>>;

export async function getAllMeals(setMeals: Args) {
  try {
    const response = await AsyncStorage.getItem(StorageEntity);

    console.log("\n\n[getAllMeals] Response: ", response);

    const transformMealList = response !== null ? JSON.parse(response) : null;

    setMeals((prevState) => [...prevState, transformMealList]);
  } catch (e) {
    console.error("\n\n[getAllMeals] Error: ", e);
  }
}
