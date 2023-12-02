export type IDietStatus = "SUCCESS" | "ERROR";

export interface IMealList {
  date: string;
  time: string;
  name: string;
  feedback: "SUCCESS" | "ERROR";
}
