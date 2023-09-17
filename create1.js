console.log(`Hello from create1.js! ENGINE REWORK IN PROGRESS`);
import { renderTodo } from "./update.js";

export let todoItems = [];
export const setTodoItems = (value) => {
  todoItems = value;
}; 
export const list = document.querySelector('.js-todo-list');



export const addTodo = (text, theId) => { //! "theId" isn't used yet, it's for the attempt at making mid-list adds
  const todo = {
    text,
    checked:false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo, theId);
};

export const txtTrim = (e) => {
  const trim = () => {const trimmed = e.value.trim();
  localStorage.setItem(e.id, trimmed);
  e.value = trimmed;
  };
  e.addEventListener("click", () => {
    trim;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItems');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach(t => {
      renderTodo(t);
    });
  }
});

// const form = document.querySelector('.js-form');
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const input = document.querySelector('.js-todo-input');

//   const text = input.value.trim();
//   if (text !== '') {
//     addTodo(text);
//     input.value = '';
//     input.focus();
//   }
// });


window.addEventListener("load", (() => {
  if (todoItems.length === 0) {
    addTodo(`Start typing here..`);
  }
}));

window.addEventListener("keydown", (e => {
  if (e.key === "Enter" && !e.shiftKey) {
    // prevent enter
    e.preventDefault();
    addTodo(``);
    return false;
    }
  })); // * Prevents Enter key from making a new line and calls a new textbox function
//! Function allows for Shift + Enter to make a new line anyways, it's not a bug

  // e.addEventListener("blur", (() => {
  //   const trimmer = input.value.trim();
  //   console.log(`Here's the trimmer!`);
  //   console.log(trimmer);
  //   if (text !== ``) {
  //     addTodo(txt);
  //     input.value = ``;
  //     input.focus();
  //   }
  // }));