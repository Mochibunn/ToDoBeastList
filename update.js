console.log(`Hello from update.js! ENGINE REWORK IN PROGRESS`); //!Debug
import { addTodo, list, todoItems, txtTrim } from "./create1.js"; //Import data array and text trimming functions
import { deleteTodo } from "./delete.js";
import { txtResize } from "./resize.js"; //Import a function that automatically resizes the text input area to fit more text

 //Select the UL tag
export const renderTodo = (todo, theId) => { //start of the function
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
  const item = document.querySelector(`[data-key='${todo.id}']`);
  if (todo.deleted) {
    item.remove();
    if (todoItems.length === 0) addTodo(``);
    return
  };

  const isChecked = todo.checked ? `done` : ``;
  const node = document.createElement(`li`); //Create a list element
    node.setAttribute(`class`, `todo-item ${isChecked}`); //Add a class
    node.setAttribute(`data-key`, todo.id); //Add a special data- attribute
    const newChkBox = document.createElement(`input`); //Create input
      newChkBox.setAttribute(`id`, todo.id); //Give it an ID
      newChkBox.setAttribute(`type`, `checkbox`); //Specify that it's a checkbox
      newChkBox.setAttribute(`class`, `tick js-tick`); //Add a class
    const newLabel = document.createElement(`div`); //Create a label
      newLabel.setAttribute(`for`, todo.id); //Specify that it's for the checkbox
        const newTextArea = document.createElement(`textarea`); //Create a textbox
        newTextArea.setAttribute(`rows`, `1`); //Make sure it's only 1 row high initially
        newTextArea.setAttribute(`class`, `liText`) //Add a class to it
        newTextArea.value = todo.text; //Fill in the value with saved data
      newLabel.appendChild(newTextArea); //Append the textbox to the checkbox
    const delBtn = document.createElement(`button`); //Create a new button
      delBtn.setAttribute(`class`, `delete-todo js-delete-todo`); //Give it classes
      delBtn.setAttribute(`id`, todo.id);
      delBtn.addEventListener("click", () => {
    console.log(`The delete button has been clicked! This is the id: ${delBtn.id}`);
    const btnId = delBtn.id;
      deleteTodo(btnId)});
        const delIcon = document.createElement(`img`); //Add an SVG image
          delIcon.setAttribute(`src`, `./res/img/recycle.svg`); //Location of the image
          delIcon.setAttribute(`alt`, `Recycle bin icon`); //* A11Y FTW, add alt text for a better a11y score
      delBtn.appendChild(delIcon); //Turn the SVG image into the button itself
    const newBtn = document.createElement(`button`); //Create a new button
      newBtn.setAttribute(`class`, `addBtn`); //Give it a class
      newBtn.textContent = `+`; //Make it a simple + icon
      newBtn.addEventListener("click", () => {
        addTodo(``, todo.id);
      });
  
  node.appendChild(newChkBox); //Append the checkbox to the LI
  node.appendChild(newLabel); //Append the label with textbox ti the LI
  node.appendChild(delBtn); //Append the delete button to the LI
  node.appendChild(newBtn); //Append the new button to the LI


  const position = list.querySelector(`[data-key='${todo.id}']`);
  console.log(`Here is the list:`);
  console.log(list);
  console.log(`Here's the data key`);
  console.log(todo.id);
  console.log(position);

  list.appendChild(node); //Append the new LI to the UL
  newTextArea.focus() //Focus input on the newly created textbox

  txtTrim(newTextArea); //Add an event listener that trims user input
  txtResize(newTextArea); //Add an event listener that automatically resizes the textbox vertically depending on the amount of text
  
  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
};

  // newTextArea.classList.add(`listItem`);
  // newTextArea.setAttribute(`id`, todo.id);
  // newTextArea.value = (a);
  // newBtn.classList.add(`listBtn`);
  // listItem.appendChild(newTextArea);
  // listItem.appendChild(newBtn);
//? Disregard








// setTimeout(()=> {
//   const listTrack = document.querySelectorAll(".listItem"); //! There is an error here!
// console.log(`Your listTrack clg from update.js:`);
// console.log(listTrack);

// listTrack.forEach(element => {
//   console.log(`Your element:`);
//   console.log(element);
//     addEventListener("blur", () => {
//     console.log(`Hello from the function!`);
//     const trimmed = element.value.trim();
//     console.log(listTrack.id);
//     localStorage.setItem(element.id, trimmed);
//     element.value = trimmed;
//   });
// });
// }, 1000);