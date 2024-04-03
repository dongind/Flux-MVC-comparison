import TodoController from "./controller/TodoController";
import TodoModel from "./model/TodoModel";
import "./style.css";
import TodoView from "./view/TodoView";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="todo"></div>
`;

const todoModel = new TodoModel();
const todoView = new TodoView();
new TodoController(todoModel, todoView);
