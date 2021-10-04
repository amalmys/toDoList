import { action, computed, makeObservable, observable } from "mobx";
class ToDoStore {
  todos = [];
//mobx store for state management
  constructor() {
    makeObservable(this, {
      todos: observable,
      completedTodosCount: computed,
      activeCount: computed,
      addTodo: action,
    });
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.is_completed === true).length;
  }

  get activeCount() {
    return this.todos.filter((todo) => todo.is_deleted !== true).length;
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      is_completed: false,
      is_edit: false,
      is_deleted: false,
    });
  }
}
export default ToDoStore;
