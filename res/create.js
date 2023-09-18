console.log(`Hello from create.js!`);
import { renderTodo } from "./update.js";

export let todoItems = [];
export const setTodoItems = (value) => todoItems = value; 
export const setTodoItemsIndex = (value, index) => todoItems[index] = value;
export const list = document.querySelector('.js-todo-list');


export const addTodo = (text) => {
  const todo = {
    text,
    checked:false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
};

export const txtTrim = (e) => {
  e.addEventListener("blur", () => {
    e.value = e.value.trim();
  });
};

// const trim = () => {const trimmed = e.value.trim();
//   localStorage.setItem(e.id, trimmed);
//   e.value = trimmed;
//   };
//? Old failed attempt



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