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
  const newBtn = document.createElement(`button`);
  newTextArea.classList.add(`listItem`);
  newTextArea.setAttribute(`id`,curDate);
  newBtn.classList.add(`listBtn`);
  newBtn.textContent = `+`;
  newListItem.appendChild(newTextArea);
  newListItem.appendChild(newBtn);
  list.appendChild(newListItem);
  newTextArea.focus();
};

const listBtn = document.querySelector(`.listBtn`);
listBtn.addEventListener(`click`, () => {newLine()});

  // const newLine = () => {
//   let i = document.getElementsByClassName("listItem").length - 1;
//   console.log("This is i: " + i);
//   const newInput = document.getElementById("listItem" + i);
  
// };
//! Disregard