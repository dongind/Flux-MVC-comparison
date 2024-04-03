import { TodoElement } from "../types/todo";

class DetailTodoModel {
  todoDetail: TodoElement | null;

  constructor() {
    this.todoDetail = null;
  }

  setDetailedTodo(todo: TodoElement) {
    this.todoDetail = todo;
  }

  getDetailedTodo(): TodoElement | null {
    return this.todoDetail;
  }

  deleteDetailedTodo() {
    this.todoDetail = null;
  }

  toggleDetailTodoState() {
    if (!this.todoDetail) return;
    this.todoDetail.state = this.todoDetail.state === "DONE" ? "TODO" : "DONE";
  }
}

export default DetailTodoModel;
