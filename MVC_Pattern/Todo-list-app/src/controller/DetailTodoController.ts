import DetailTodoModel from "../model/DetailTodoModel";
import { TodoElement } from "../types/todo";
import DetailTodoView from "../view/DetailTodoView";

class DetailTodoController {
  private detailTodoModel: DetailTodoModel;
  private detailTodoView: DetailTodoView;

  constructor(detailTodoModel: DetailTodoModel, detailTodoView: DetailTodoView) {
    this.detailTodoModel = detailTodoModel;
    this.detailTodoView = detailTodoView;
    this.render();

    document.addEventListener("deleteTodo", (() => {
      this.handleDeleteTodo();
    }) as EventListener);

    document.addEventListener("toggleTodoState", (() => {
      this.handleToggleTodoState();
    }) as EventListener);

    document.addEventListener("clickTodo", (({ detail: todo }: CustomEvent) => {
      this.handleSetDetailTodo(todo);
    }) as EventListener);
  }

  render() {
    this.detailTodoView.displayDetailTodo(this.detailTodoModel.getDetailedTodo());
  }

  handleDeleteTodo() {
    this.detailTodoModel.deleteDetailedTodo();
    this.render();
  }

  handleToggleTodoState() {
    this.detailTodoModel.toggleDetailTodoState();
    this.render();
  }

  handleSetDetailTodo(todo: TodoElement) {
    this.detailTodoModel.setDetailedTodo(todo);
    this.render();
  }
}

export default DetailTodoController;
