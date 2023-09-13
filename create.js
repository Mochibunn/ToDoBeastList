console.log(`Hello from create.js!`)
const enterKey = document.querySelector("#listContainer");
enterKey.addEventListener("keydown", ((e) => {
  if (e.keyCode == 13 && !e.shiftKey)
  {
    // prevent enter
    e.preventDefault();
    newLine();
    //alert("ok");
    return false;
    }
  })); // * Prevents Enter key from making a new line and calls a new textbox function
//! Function allows for Shift + Enter to make a new line anyways, it's not a bug

  
let itemCount = [0]; //! Probably deprecated

const newLine = () => { // * New text input creator
  console.log(`New line coming right up!`);

  const curDate = Date.now();
  const list = document.querySelector(`#listContainer`);
  const newListItem = document.createElement(`li`);
  const newTextArea = document.createElement(`textarea`);
  newTextArea.classList.add(`listItem`);
  newTextArea.setAttribute(`id`,curDate);
  newListItem.appendChild(newTextArea);
  list.appendChild(newListItem);
  console.log(list); //? Sadly, I can't figure out how to focus on new text box :(
  // const focusTo = list.lastElementChild.innerHTML.focus();
};

  // const newLine = () => {
//   let i = document.getElementsByClassName("listItem").length - 1;
//   console.log("This is i: " + i);
//   const newInput = document.getElementById("listItem" + i);
  
// };
//! Disregard