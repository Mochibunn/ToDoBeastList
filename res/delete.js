console.log(`Hello from delete.js!`);
import { setTodoItems, todoItems } from "./create.js";
import { renderTodo } from "./update.js";


export const deleteTodo = (key) => { //accepts the button id as the key
  const index = todoItems.findIndex(item => item.id === Number(key)); //find the index of the object with the same id as the id of the button
  const todo = { //new element template
    deleted: true, //set a new key
    ...todoItems[index] //add the rest of the information from the array at the index
  };
  setTodoItems(todoItems.filter(item => item.id !== Number(key))); //pass this method to the array parser from create.js (line 5)
  localStorage.setItem('todoItems', JSON.stringify(todoItems)); //commits the change to memory
  renderTodo(todo); //refresh the list to reflect the change
}

// export let close = document.getElementsByClassName("delete-item");

// export const forLoop = for (let i = 0; i < close.length; i++) {
//     close[i].onclick == function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// };
//? Rohini's honest attempt!