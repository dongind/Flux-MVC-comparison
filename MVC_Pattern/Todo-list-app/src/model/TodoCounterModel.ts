import { TodoCounterData, TodoState } from "../types/todo";

class TodoCounterModel {
  totalTodoCount: number;
  todoStateCount: number;
  doneStateCount: number;

  constructor() {
    this.totalTodoCount = 0;
    this.todoStateCount = 0;
    this.doneStateCount = 0;
  }

  getCounterData(): TodoCounterData {
    return {
      total: this.totalTodoCount,
      todoState: this.todoStateCount,
      doneState: this.doneStateCount,
    };
  }

  countNewTodo() {
    this.totalTodoCount += 1;
    this.todoStateCount += 1;
  }

  countDeletedTodo(todoState: TodoState) {
    this.totalTodoCount -= 1;
    if (todoState === "DONE") {
      this.doneStateCount -= 1;
    } else {
      this.todoStateCount -= 1;
    }
  }

  countToggledTodoState(todoState: TodoState) {
    if (todoState === "DONE") {
      this.doneStateCount += 1;
      this.todoStateCount -= 1;
      return;
    }
    this.todoStateCount += 1;
    this.doneStateCount -= 1;
  }
}

export default TodoCounterModel;
