import { IDietStatus } from "@/interfaces";

export interface IMealDTO {
  name: string;
  description: string;
  date: string;
  time: string;
  dietStatus: IDietStatus;
}
