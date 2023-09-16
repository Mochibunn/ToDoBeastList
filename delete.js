import { setTodoItems, todoItems } from "./create1.js";
import { renderTodo } from "./update.js";

// export let close = document.getElementsByClassName("delete-item");

// export const forLoop = for (let i = 0; i < close.length; i++) {
//     close[i].onclick == function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// };

export const deleteTodo = (key) => {
  const index = todoItems.findIndex(item => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  setTodoItems(todoItems.filter(item => item.id !== Number(key)));
  renderTodo(todo);
}