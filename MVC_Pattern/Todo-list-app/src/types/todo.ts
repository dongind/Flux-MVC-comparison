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

export interface TodoDeleteButtonObject {
  id: number;
  deleteButton: HTMLButtonElement;
}

export interface TodoToggleStateButtonObject {
  id: number;
  toggleButton: HTMLButtonElement;
}

export interface TodoElementObject {
  id: number;
  todoElement: HTMLDivElement;
}
