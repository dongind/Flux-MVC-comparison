import "./style.css";
import TodoController from "./controller/TodoController";
import TodoCounterController from "./controller/TodoCounterController";
import DetailTodoModel from "./model/DetailTodoModel";
import TodoCounterModel from "./model/TodoCounterModel";
import TodoModel from "./model/TodoModel";
import DetailTodoView from "./view/DetailTodoView";
import TodoCounterView from "./view/TodoCounterView";
import TodoView from "./view/TodoView";
import DetailTodoController from "./controller/DetailTodoController";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="todo"></div>
  <div id="todoCounter"></div>
  <div id="detailTodo"></div>
`;

const todoModel = new TodoModel();
const todoView = new TodoView();

const todoCounterModel = new TodoCounterModel();
const todoCounterView = new TodoCounterView();

const detailTodoModel = new DetailTodoModel();
const detailTodoView = new DetailTodoView();

new TodoController(
  todoModel,
  todoView,
  todoCounterModel,
  todoCounterView,
  detailTodoModel,
  detailTodoView
);
new TodoCounterController(todoCounterModel, todoCounterView);
new DetailTodoController(detailTodoModel, detailTodoView);
