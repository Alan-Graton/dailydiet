import { getAllMeals } from "./getAllMeals";

export async function getGeneralDetails() {
  try {
    console.log("\n\n[getGeneralDetails] Running...");
    const allMeals = await getAllMeals();

    return allMeals;
  } catch (e) {
    console.error("\n\n[getGeneralDetails] Error: ", e);
  }
}
