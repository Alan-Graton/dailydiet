import React from "react";
import { IMealList } from "@/interfaces";

type SelectedMealType = IMealList;

interface PropsMealContext {
  selectedMeal: any;
  setSelectedMeal: React.Dispatch<React.SetStateAction<any>>;
}

const DEFAULT_VALUE = {
  selectedMeal: {
    date: "",
    time: "",
    name: "",
    description: "",
    feedback: "SUCCESS",
  },
  setSelectedMeal: () => {},
};

export const MealContext = React.createContext<PropsMealContext>(DEFAULT_VALUE);

export function MealProvider({ children }: any) {
  const [selectedMeal, setSelectedMeal] = React.useState(
    DEFAULT_VALUE.selectedMeal
  );

  return (
    <MealContext.Provider value={{ selectedMeal, setSelectedMeal }}>
      {children}
    </MealContext.Provider>
  );
}
