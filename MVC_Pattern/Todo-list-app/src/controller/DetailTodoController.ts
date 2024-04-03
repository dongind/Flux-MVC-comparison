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
    this.detailTodoView.bindTodoDeleteButton(this.handleDeleteTodo.bind(this));
    this.detailTodoView.bindTodoStateToggleButton(this.handleToggleTodoState.bind(this));
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
