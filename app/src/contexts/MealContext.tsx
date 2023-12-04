import React from "react";

type SelectedMealType = {
  date: string;
  time: string;
  name: string;
  description: string;
  feedback: string;
};

interface PropsMealContext {
  selectedMeal: SelectedMealType;
  setSelectedMeal: React.Dispatch<React.SetStateAction<SelectedMealType>>;
}

const DEFAULT_VALUE = {
  selectedMeal: {
    date: "",
    time: "",
    name: "",
    description: "",
    feedback: "",
  },
  setSelectedMeal: () => {},
};

export const MealContext = React.createContext<PropsMealContext>(DEFAULT_VALUE);

interface Props {
  children: React.ReactNode;
}

export function MealProvider({ children }: Props) {
  const [selectedMeal, setSelectedMeal] = React.useState<SelectedMealType>(
    DEFAULT_VALUE.selectedMeal
  );

  return (
    <MealContext.Provider value={{ selectedMeal, setSelectedMeal }}>
      {children}
    </MealContext.Provider>
  );
}