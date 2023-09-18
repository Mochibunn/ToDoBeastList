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






{/* To-do Beast List - a versatile, flexible to-do list using JS 
Copyright (C) 2023  Mochibun

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. 

hi@mochibun.me */}