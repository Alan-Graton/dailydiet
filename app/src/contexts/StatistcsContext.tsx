import React from "react";

import { getStatistics } from "@/storage/getStatistics";
import { IMealDTO } from "@/storage/config/MealDTO";
import { setStatusBarStyle } from "expo-status-bar";

const DEFAULT_VALUE = {
  statistics: {
    percentage: 0,
    bestMealSequence: 0,
    mealCounter: 0,
    inDietMeals: 0,
    outDietMeals: 0,
  },
  setStatistics: () => {},
  fetchStatistics: (meals: IMealDTO[]) => {},
};

export const StatistcsContext =
  React.createContext<PropsStatisticsContext>(DEFAULT_VALUE);

export function StatisticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [statistics, setStatistics] = React.useState<IStatistics>(
    DEFAULT_VALUE.statistics
  );

  function fetchStatistics(meals: IMealDTO[]): void {
    const response = getStatistics(meals);

    if (!response) return;

    setStatistics((prevState) => (prevState = response));
  }

  return (
    <StatistcsContext.Provider
      value={{ statistics, setStatistics, fetchStatistics }}
    >
      {children}
    </StatistcsContext.Provider>
  );
}

export interface IStatistics {
  percentage: number;
  bestMealSequence: number;
  mealCounter: number;
  inDietMeals: number;
  outDietMeals: number;
}

interface PropsStatisticsContext {
  statistics: IStatistics;
  setStatistics: React.Dispatch<React.SetStateAction<IStatistics>>;
  fetchStatistics: (meals: IMealDTO[]) => void;
}
