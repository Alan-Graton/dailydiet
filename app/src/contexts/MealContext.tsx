import React from "react";

import { IFeedback } from "@/interfaces";
import { IMealDTO } from "@/storage/config/MealDTO";

export type SelectedMealType = {
  id: string;
  date: string;
  time: string;
  name: string;
  description: string;
  feedback: IFeedback;
};

interface PropsMealContext {
  selectedMeal: IMealDTO | null;
  setSelectedMeal: React.Dispatch<React.SetStateAction<IMealDTO | null>>;
}

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

export const MealContext = React.createContext<PropsMealContext>(DEFAULT_VALUE);

interface Props {
  children: React.ReactNode;
}

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
