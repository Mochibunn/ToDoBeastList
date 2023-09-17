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