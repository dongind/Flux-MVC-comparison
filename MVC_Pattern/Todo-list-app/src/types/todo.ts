export type TodoState = "TODO" | "DONE";

export interface TodoElement {
  id: number;
  content: string;
  state: TodoState;
}

export interface TodoCounterData {
  total: number;
  todoState: number;
  doneState: number;
}
