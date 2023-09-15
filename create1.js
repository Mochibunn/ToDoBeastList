console.log(`Hello from create1.js! ENGINE REWORK IN PROGRESS`);
import { show } from "./update.js";


export let todoItems = [];


export const addTodo = (txt) => {
  console.log(`I'm inside of the "addTodo" const!`);
  const todo = {
    txt, checked:false, id: Date.now()
  };

  todoItems.push(todo);
  show(todo);
};

// console.log(`here's your listContainer!`);



export const txtTrim = (e) => {
  // const input = e.querySelector(``);
  
  e.addEventListener("blur", () => {
    console.log(`Hello from the function!`);
    const trimmed = e.value.trim();
    localStorage.setItem(e.id, trimmed);
    e.value = trimmed;
  });
};

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

window.addEventListener("load", (() => {
  if (todoItems.length == 0) {
    addTodo(``);
  }
}));



class Create {

}