console.log(`Hello from delete.js!`);
import { setTodoItems, todoItems } from "./create.js";
import { renderTodo } from "./update.js";


export const deleteTodo = (key) => {
  const index = todoItems.findIndex(item => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  setTodoItems(todoItems.filter(item => item.id !== Number(key)));
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
  renderTodo(todo);
}
// export let close = document.getElementsByClassName("delete-item");

// export const forLoop = for (let i = 0; i < close.length; i++) {
//     close[i].onclick == function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// };