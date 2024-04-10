import "./style.css";
import createTodoComponents from "./components/todoComponent";
import createCounterComponent from "./components/counterComponent";
import createDetailComponent from "./components/detailComponent";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="todo"></div>
  <div id="todoCounter"></div>
  <div id="detailTodo"></div>
`;

createTodoComponents(document.querySelector("#todo"));
createCounterComponent(document.querySelector("#todoCounter"));
createDetailComponent(document.querySelector("#detailTodo"));
