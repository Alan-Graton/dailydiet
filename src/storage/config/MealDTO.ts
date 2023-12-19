import { IFeedback } from "@/interfaces";

export interface IMealDTO {
  id: string, // UUIDV4 value
  name: string;
  description: string;
  date: string;
  time: string;
  feedback: IFeedback;
}
