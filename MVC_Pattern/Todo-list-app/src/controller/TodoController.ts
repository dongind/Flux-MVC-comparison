import DetailTodoModel from "../model/DetailTodoModel";
import TodoCounterModel from "../model/TodoCounterModel";
import TodoModel from "../model/TodoModel";
import {
  TodoDeleteButtonObject,
  TodoToggleStateButtonObject,
  TodoElementObject,
} from "../types/todo";
import DetailTodoView from "../view/DetailTodoView";
import TodoCounterView from "../view/TodoCounterView";
import TodoView from "../view/TodoView";

class TodoController {
  private todoModel: TodoModel;
  private todoView: TodoView;
  private todoCounterModel: TodoCounterModel;
  private todoCounterView: TodoCounterView;
  private detailTodoModel: DetailTodoModel;
  private detailTodoView: DetailTodoView;

  constructor(
    todoModel: TodoModel,
    todoView: TodoView,
    todoCounterModel: TodoCounterModel,
    todoCounterView: TodoCounterView,
    detailTodoModel: DetailTodoModel,
    detailTodoView: DetailTodoView
  ) {
    this.todoModel = todoModel;
    this.todoView = todoView;
    this.todoCounterModel = todoCounterModel;
    this.todoCounterView = todoCounterView;
    this.detailTodoModel = detailTodoModel;
    this.detailTodoView = detailTodoView;

    this.todoView.bindAddTodo(this.handleAddTodo.bind(this));
    this.render();
  }

  render() {
    const todos = this.todoModel.getAllTodos();
    this.todoView.displayTodos(todos);
    this.todoView.bindDeleteTodo(this.handleDeleteTodo.bind(this));
    this.todoView.bindToggleTodoState(this.handleToggleTodoState.bind(this));
    this.todoView.bindClickTodoElement(this.handleClickTodoElement.bind(this));
  }

  renderCounter() {
    const todoCounterData = this.todoCounterModel.getCounterData();
    this.todoCounterView.displayTodoCounter(todoCounterData);
  }

  renderDetail() {
    this.detailTodoView.displayDetailTodo(this.detailTodoModel.getDetailedTodo());
  }

  handleAddTodo() {
    const newTodo = this.todoView.getNewTodo();
    if (newTodo.trim() === "") return;
    this.todoModel.addTodo(newTodo);
    this.todoView.todoInput.value = "";
    this.render();

    this.todoCounterModel.countNewTodo();
    this.renderCounter();
  }

  handleDeleteTodo(event: MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const targetId = Number(target.id);
    const todo = this.todoModel.getTodoByID(targetId);

    this.todoCounterModel.countDeletedTodo(todo.state);
    this.renderCounter();

    this.todoModel.deleteTodo(targetId);
    this.render();

    if (targetId === this.detailTodoModel.getDetailedTodo()?.id) {
      this.detailTodoModel.deleteDetailedTodo();
      this.renderDetail();
    }

    this.todoView.todoDeleteButtonList = this.todoView.todoDeleteButtonList.filter(
      ({ id }: TodoDeleteButtonObject) => id !== targetId
    );
    this.todoView.todoToggleStateButtonList = this.todoView.todoToggleStateButtonList.filter(
      ({ id }: TodoToggleStateButtonObject) => id !== targetId
    );
    this.todoView.todoElementList = this.todoView.todoElementList.filter(
      ({ id }: TodoElementObject) => id !== targetId
    );
  }

  handleToggleTodoState(event: MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const targetId = Number(target.id);
    const todo = this.todoModel.getTodoByID(targetId);

    this.todoModel.toggleTodoState(todo.id);
    this.render();

    this.todoCounterModel.countToggledTodoState(todo.state);
    this.renderCounter();

    this.renderDetail();
  }

  handleClickTodoElement(event: MouseEvent) {
    if (event.target instanceof HTMLButtonElement) return;

    const target = event.target as HTMLDivElement;
    const targetId = Number(target.id);
    const todo = this.todoModel.getTodoByID(targetId);

    this.detailTodoModel.setDetailedTodo(todo);
    this.renderDetail();
  }
}

export default TodoController;
