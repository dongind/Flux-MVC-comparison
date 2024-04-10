import "./style.css";
import createTodoComponents from "./components/todoComponents";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="todo"></div>
  <div id="todoCounter"></div>
  <div id="detailTodo"></div>
`;

createTodoComponents(document.querySelector("#todo"));
