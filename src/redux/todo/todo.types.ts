import { EStatus } from "../../types/types";

export type TTodoItem = {
  title: string;
  done: boolean;
};

export interface ITodoState {
  todos: TTodoItem[];
  status: EStatus;
}
