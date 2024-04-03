import "./style.css";
import TodoController from "./controller/TodoController";
import TodoCounterController from "./controller/TodoCounterController";
import DetailTodoModel from "./model/DetailTodo";
import TodoCounterModel from "./model/TodoCounterModel";
import TodoModel from "./model/TodoModel";
import DetailTodoView from "./view/DetailTodoView";
import TodoCounterView from "./view/TodoCounterView";
import TodoView from "./view/TodoView";

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
detailTodoView.displayDetailTodo({ id: 1, content: "hello", state: "DONE" });

new TodoController(todoModel, todoView, todoCounterModel, todoCounterView);
new TodoCounterController(todoCounterModel, todoCounterView);
