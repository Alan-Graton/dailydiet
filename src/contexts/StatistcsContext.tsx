import React from "react";

import { getStatistics } from "@/storage/getStatistics";
import { IMealDTO } from "@/storage/config/MealDTO";

import { IFeedback } from "@/interfaces";

const DEFAULT_VALUE = {
  statistics: {
    percentage: 0,
    percentageStatus: "SUCCESS",
    bestMealSequence: 0,
    mealCounter: 0,
    inDietMeals: 0,
    outDietMeals: 0,
  } as IStatistics,
  setStatistics: () => {},
  fetchStatistics: (meals: IMealDTO[]) => {},
};

export const StatistcsContext =
  React.createContext<IStatisticsContext>(DEFAULT_VALUE);

export function StatisticsProvider({ children }: Props) {
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

export interface Props {
  children: React.ReactNode;
}

export interface IStatistics {
  percentage: number;
  percentageStatus: IFeedback;
  bestMealSequence: number;
  mealCounter: number;
  inDietMeals: number;
  outDietMeals: number;
}

interface IStatisticsContext {
  statistics: IStatistics;
  setStatistics: React.Dispatch<React.SetStateAction<IStatistics>>;
  fetchStatistics: (meals: IMealDTO[]) => void;
}
