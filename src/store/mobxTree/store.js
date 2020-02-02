import { types } from "mobx-state-tree";
import { values } from "mobx";

const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false)
  })
  .actions(self => {
    function setName(newName) {
      self.name = newName;
    }

    function toggle() {
      //   console.log(self)       self 指向当前的数据节点
      self.done = !self.done;
    }

    return { setName, toggle };
  });

const RootStore = types
  .model({
    todos: types.map(Todo)
  })
  .views(self => ({
    get pendingCount() {
      return values(self.todos).filter(todo => !todo.done).length;
    },
    get completedCount() {
      return values(self.todos).filter(todo => todo.done).length;
    },
    getTodosWhereDoneIs(done) {
      return values(self.todos).filter(todo => todo.done === done);
    }
  }))
  .actions(self => {
    function addTodo(id, name) {
      //     console.log(self)                 self 指向store生成的数据
      self.todos.set(id, Todo.create({ name }));
    }

    return { addTodo };
  });

export default RootStore;
