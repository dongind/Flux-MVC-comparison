import DetailTodoModel from "../model/DetailTodoModel";
import TodoCounterModel from "../model/TodoCounterModel";
import TodoModel from "../model/TodoModel";
import { TodoElement } from "../types/todo";
import DetailTodoView from "../view/DetailTodoView";
import TodoCounterView from "../view/TodoCounterView";
import TodoView from "../view/TodoView";

class DetailTodoController {
  private detailTodoModel: DetailTodoModel;
  private detailTodoView: DetailTodoView;
  private todoModel: TodoModel;
  private todoView: TodoView;
  private todoCounterModel: TodoCounterModel;
  private todoCounterView: TodoCounterView;

  constructor(
    detailTodoModel: DetailTodoModel,
    detailTodoView: DetailTodoView,
    todoModel: TodoModel,
    todoView: TodoView,
    todoCounterModel: TodoCounterModel,
    todoCounterView: TodoCounterView
  ) {
    this.detailTodoModel = detailTodoModel;
    this.detailTodoView = detailTodoView;
    this.todoModel = todoModel;
    this.todoView = todoView;
    this.todoCounterModel = todoCounterModel;
    this.todoCounterView = todoCounterView;
    this.render();
    this.detailTodoView.bindTodoDeleteButton(this.handleDeleteTodo.bind(this));
    this.detailTodoView.bindTodoStateToggleButton(this.handleToggleTodoState.bind(this));
  }

  render() {
    this.detailTodoView.displayDetailTodo(this.detailTodoModel.getDetailedTodo());
  }

  renderTodo() {
    this.todoView.displayTodos(this.todoModel.getAllTodos());
  }

  renderCounter() {
    this.todoCounterView.displayTodoCounter(this.todoCounterModel.getCounterData());
  }

  handleDeleteTodo() {
    const detailTodo = this.detailTodoModel.getDetailedTodo();
    if (!detailTodo) throw Error("invalid delete event");

    this.detailTodoModel.deleteDetailedTodo();
    this.render();

    this.todoModel.deleteTodo(detailTodo.id);
    this.renderTodo();

    this.todoCounterModel.countDeletedTodo(detailTodo.state);
    this.renderCounter();
  }

  handleToggleTodoState() {
    const detailTodo = this.detailTodoModel.getDetailedTodo();
    if (!detailTodo) throw Error("invalid delete event");

    this.detailTodoModel.toggleDetailTodoState();
    this.render();

    this.todoCounterModel.countToggledTodoState(detailTodo.state);
    this.renderCounter();
  }

  handleSetDetailTodo(todo: TodoElement) {
    this.detailTodoModel.setDetailedTodo(todo);
    this.render();
  }
}

export default DetailTodoController;
