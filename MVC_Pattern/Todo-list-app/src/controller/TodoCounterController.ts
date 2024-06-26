import TodoCounterModel from "../model/TodoCounterModel";
import TodoCounterView from "../view/TodoCounterView";

class TodoCounterController {
  private todoCounterModel: TodoCounterModel;
  private todoCounterView: TodoCounterView;

  constructor(todoCounterModel: TodoCounterModel, todoCounterView: TodoCounterView) {
    this.todoCounterModel = todoCounterModel;
    this.todoCounterView = todoCounterView;

    this.render();
  }

  render() {
    this.todoCounterView.displayTodoCounter(this.todoCounterModel.getCounterData());
  }
}

export default TodoCounterController;
