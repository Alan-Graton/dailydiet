import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageEntity } from "./config/StorageConfig";
import { IMealList } from "@/interfaces";

type Params = React.Dispatch<React.SetStateAction<IMealList[]>>;

export async function getAllMeals(setMeals: Params) {
  try {
    const response = (await AsyncStorage.getItem(
      JSON.parse(StorageEntity)
    )) as unknown as IMealList[];

    console.log("\n\n[getAllMeals] Response: ", response);

    setMeals((prevState) => (prevState = response));
  } catch (e) {
    console.error("\n\n[getAllMeals] Error: ", e);
  }
}
