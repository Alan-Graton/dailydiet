import React from "react";

import { IMealDTO } from "@/storage/config/MealDTO";

const DEFAULT_VALUE = {
  selectedMeal: {
    id: "",
    date: "",
    time: "",
    name: "",
    description: "",
    feedback: "SUCCESS",
  } as IMealDTO,
  setSelectedMeal: () => {},
};

export const MealContext = React.createContext<IMealContext>(DEFAULT_VALUE);

export function MealProvider({ children }: Props) {
  const [selectedMeal, setSelectedMeal] = React.useState<IMealDTO | null>(
    DEFAULT_VALUE.selectedMeal
  );

  return (
    <MealContext.Provider value={{ selectedMeal, setSelectedMeal }}>
      {children}
    </MealContext.Provider>
  );
}

interface IMealContext {
  selectedMeal: IMealDTO | null;
  setSelectedMeal: React.Dispatch<React.SetStateAction<IMealDTO | null>>;
}
interface Props {
  children: React.ReactNode;
}
