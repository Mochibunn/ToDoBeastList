console.log(`Hello from create1.js! ENGINE REWORK IN PROGRESS`)
import { show } from "./update.js";
let listItems = [];


const addTodo = (txt) => {
  console.log(`I'm inside of the "addTodo" const!`);
  const todo = {
    txt, checked:false, id: Date.now()
  };

  listItems.push(todo);
  show(todo);
};

const listContainer = document.querySelector(`.listContainer`);
// console.log(`here's your listContainer!`);
listContainer.firstChild.addEventListener("blur", (() => {
  const input = document.querySelector(`.listItem`);

  const trimmer = input.value.trim();
  if (text !== ``) {
    addTodo(txt);
    input.value = ``;
    input.focus();
  }
}));

// window.addEventListener("load", (() => {
//   if (condition) {
//     addTodo();
//   }
// }));

addTodo(`Hello world!`);

class Create {

}