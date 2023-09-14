console.log(`Hello from create.js!`)
const list = document.querySelector(`#listContainer`);

list.addEventListener("keydown", ((e) => {
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





class NewLine {
  #id;
  #value;
  
  constructor(id, e) {
    this.#id = id;
    this.#value = e;
    this.newLine()
  }
  newline() {
console.log(`Hello!`);
  }
}







const newLine = () => { // * New text input creator
  console.log(`New line coming right up!`);

  const curDate = Date.now();
  const newListItem = document.createElement(`li`);
  const newTextArea = document.createElement(`textarea`);
  const newBtn = document.createElement(`button`);
  newTextArea.classList.add(`listItem`);
  const o = newTextArea.setAttribute(`id`, `itm` + curDate);
  localStorage.setItem(`itm` + curDate, ``);
  newBtn.classList.add(`listBtn`);
  newBtn.textContent = `+`;
  newListItem.appendChild(newTextArea);
  newListItem.appendChild(newBtn);
  list.appendChild(newListItem);
  newTextArea.focus();
  console.log(newTextArea)
};

window.addEventListener("load", () => { //* Load items from memory
  console.log(`Your code is working!`);
  const listIds = Object.keys(localStorage);
  const result = listIds.filter(nameCheck);
  function nameCheck(name) {
    if  (name.includes(`itm`) == true) {
      return name;
    }
    return;
  }
  console.log(`Results are here!:`);
  console.log(result);

  if (result.length !== 0) {
  result.forEach(element => {
    const a = localStorage.getItem(element)
    const newListItem = document.createElement(`li`);
    const newTextArea = document.createElement(`textarea`);
    const newBtn = document.createElement(`button`);
    newTextArea.classList.add(`listItem`);
    newTextArea.setAttribute(`id`, element);
    newTextArea.value = (a);
    newBtn.classList.add(`listBtn`);
    newBtn.textContent = `+`;
    newListItem.appendChild(newTextArea);
    newListItem.appendChild(newBtn);
    list.appendChild(newListItem);    
    
    console.log(`your a:`);
    console.log(a);
  })
  return;
};
newLine();
});

setTimeout(()=> {
const listBtn = document.querySelector(`.listBtn`); //* Button to add new
listBtn.addEventListener(`click`, () => {newLine()}); //* textarea
}, 1000);
// const newLine = () => {
//   let i = document.getElementsByClassName("listItem").length - 1;
//   console.log("This is i: " + i);
//   const newInput = document.getElementById("listItem" + i);
// };
//! Disregard