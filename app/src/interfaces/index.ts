export type IFeedback = "SUCCESS" | "ERROR";

export interface IMealList {
  date: string;
  time: string;
  name: string;
  description: string;
  feedback: "SUCCESS" | "ERROR";
}
