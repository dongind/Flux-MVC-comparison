import TodoController from "./controller/TodoController";
import TodoCounterController from "./controller/TodoCounterController";
import TodoCounterModel from "./model/TodoCounterModel";
import TodoModel from "./model/TodoModel";
import "./style.css";
import TodoCounterView from "./view/TodoCounterView";
import TodoView from "./view/TodoView";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="todo"></div>
  <div id="todoCounter"></div>
`;

const todoModel = new TodoModel();
const todoView = new TodoView();
new TodoController(todoModel, todoView);

const todoCounterModel = new TodoCounterModel();
const todoCounterView = new TodoCounterView();
new TodoCounterController(todoCounterModel, todoCounterView);
