console.log(`Hello from update.js!`); //!Debug
import { addTodo, list, setTodoItems, setTodoItemsIndex, todoItems, txtTrim } from "./create.js"; //import data array and text trimming functions
import { deleteTodo } from "./delete.js"; //import a function that does the deleting work
import { txtResize } from "./resize.js"; //import a function that automatically resizes the text input area to fit more text


export const renderTodo = (todo, mid) => { //start of the function
  // localStorage.setItem('todoItems', JSON.stringify(todoItems));//? Check
  const item = document.querySelector(`[data-key='${todo.id}']`); //select the LI tag with the corresponding ID inside of the DOM
  if (todo.deleted) { //if it's marked for deletion
    item.remove(); //remove the LI tag
    localStorage.setItem('todoItems', JSON.stringify(todoItems)); //commit change to memory
    if (todoItems.length === 0) addTodo(``); //if the item.remove() removes the last list item, add a new blank one
    return; //end function execution
  };

  const isChecked = todo.checked ? `done` : ``; //(see below)
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
        newTextArea.value = todo.text.trim(); //Fill in the value with saved data
      newLabel.appendChild(newTextArea); //Append the textbox to the checkbox
    const delBtn = document.createElement(`button`); //Create a new button
      delBtn.setAttribute(`class`, `delete-todo js-delete-todo`); //Give it classes
      delBtn.setAttribute(`id`, todo.id); //give it an id of the current object
      delBtn.addEventListener("click", () => { //listen for clicks on the button
    const btnId = delBtn.id; //record the id of the button
      deleteTodo(btnId)}); //execute the delete function and pass the id of the button as the argument
        const delIcon = document.createElement(`img`); //Add an SVG image
          delIcon.setAttribute(`src`, `./res/img/recycle.svg`); //Location of the image
          delIcon.setAttribute(`alt`, `Recycle bin icon`); //* A11Y FTW, add alt text for a better a11y score
      delBtn.appendChild(delIcon); //Turn the SVG image into the button itself
    const newBtn = document.createElement(`button`); //Create a new button
      newBtn.setAttribute(`class`, `addBtn`); //Give it a class
      newBtn.textContent = `+`; //Make it a simple + icon
      newBtn.addEventListener("click", () => { midInsert(todo) });

  node.appendChild(newChkBox); //Append the checkbox to the LI
  node.appendChild(newLabel); //Append the label with textbox ti the LI
  node.appendChild(newBtn); //Append the new button to the LI
  node.appendChild(delBtn); //Append the delete button to the LI
  newTextArea.focus() //focus input on the newly created textbox
  if (typeof mid === `number`) { //if the type of the "mid" argument is a number ..
    const prevItm = list.querySelector(`[data-key='${mid}']`); //.. select the current <li>
    prevItm.after(node); //add a new <li> after the current one

    txtTrim(newTextArea); //(line 65)
    txtUpdate(newTextArea, todo); //(line 66)
    txtResize(newTextArea); //(line 67)
    enterPreventer(newTextArea, todo); //(line 68)
    newTextArea.focus(); //(automatically switch cursor to the new <li>)
    return; //stop the execution of this function
  } //if the "mid" argument is not a number, execute this
  list.appendChild(node); //append the new LI to the UL

  txtTrim(newTextArea); //add an event listener that trims user input
  txtUpdate(newTextArea, todo);//dd an event listener that updates the memory
  txtResize(newTextArea); //add an event listener that automatically resizes the textbox vertically depending on the amount of text
  enterPreventer(newTextArea, todo); //add an event listener that prevents the default Enter behavior inside of a textarea and executes a new line add

  if (item) { //if item exists in the DOM ..
    list.replaceChild(node, item); //.. replace it
  } else { //otherwise ..
    list.append(node); //.. append the item to the end of the list
  }
};

  const txtUpdate = (e, todo) => { //function that accepts the element and current object as its arguments
  e.addEventListener("keyup", () => { //while we're in this function, add an event listener that listens to every keypress on this specific user input field
    const itemLi = document.querySelector(`[data-key='${todo.id}']`);//grab the LI element with the correct ID
    const txtArea = itemLi.querySelector(`textarea`); //focus on the textarea inside of the LI element
    const text = txtArea.value; //set this variable to always equal to what the user has put into the textarea
    const updateObj = { //create a new object
      text, //append the text from the text const
      checked: todo.checked, //append the current status of the checkbox to the new object
      id: todo.id, //append the current object ID to the new object so that it can replace the original object
    };
    const index = todoItems.findIndex(item => item.id === todo.id); //find the index of the object with the current ID (see below)
    if (index !== -1) { //If index is not -1 aka if index is found
      setTodoItemsIndex(updateObj, index); //pass that index along with the new object data to the function from create.js
    };
    localStorage.setItem('todoItems', JSON.stringify(todoItems)); //Commit the changes to memory.
    //There is no need to refresh the list as the user input will always reflect the latest changes to the list item
  });
  };

  const midInsert = (todo) => { //accepts the current object as the argument
      const element = { //new element template
        text: ``,
        checked:false,
        id: Date.now(),
      };
      const index = todoItems.findIndex(item => item.id === todo.id) + 1; //find the index of the current  object and focus on the next one
      todoItems.splice(index, 0, element); //cut the array at the index and insert the new element template
      const mid = todo.id; //id of the current <li> tag
      renderTodo(element, mid); //run the big scary function, "mid" has a number so it will execute a condition on line 
  };

  const enterPreventer = (e, todo) => { //accepts the element and the current object as the arguments
    e.addEventListener("keydown", (e => { //listen to any keystroke
        if (e.key === "Enter" && !e.shiftKey) { //if it happens to be the Enter key (but not if Shift + Enter)
          e.preventDefault(); //prevent the default behavior
          midInsert(todo); //execute the "midInsert" function (line 96)
          return false; //stop executing function 
        }
      }));
  };


//! Line 17: This ternary operator checks whether the object's "checked" key value is set to true or false. If it's true, the <li> tags gets a ".done" class which applies the CSS effect to cross out the text. If false, it removes the aforementioned class and the styling.

//! Line 87: Inside on the array, find the index of the first item that matches the following criteria:

//! Each object inside of the array gets passed as the argument for the "item" parameter
//! If the id of the item (ID of the object at index "i") matches the id of the current object (and thus, the new object), execute the following ..

// const updateFunc = () => {
// };

  // newTextArea.classList.add(`listItem`);
  // newTextArea.setAttribute(`id`, todo.id);
  // newTextArea.value = (a);
  // newBtn.classList.add(`listBtn`);
  // listItem.appendChild(newTextArea);
  // listItem.appendChild(newBtn);
//? Old failed attempt


// setTimeout(()=> {
//   const listTrack = document.querySelectorAll(".listItem");
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
//? Old failed attempt