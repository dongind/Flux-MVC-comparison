import TodoCounterModel from "../model/TodoCounterModel";
import TodoCounterView from "../view/TodoCounterView";

class TodoCounterController {
  todoCounterModel: TodoCounterModel;
  todoCounterView: TodoCounterView;

  constructor(todoCounterModel: TodoCounterModel, todoCounterView: TodoCounterView) {
    this.todoCounterModel = todoCounterModel;
    this.todoCounterView = todoCounterView;
  }
}
