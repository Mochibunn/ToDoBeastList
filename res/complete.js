import { list, todoItems } from "./create.js";
import { deleteTodo } from "./delete.js";
import { renderTodo } from "./update.js";

export const toggleDone = (key) => {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }
});