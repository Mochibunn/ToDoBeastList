console.log(`Hello from create.js!`)
const enterKey = document.querySelector(".listItem");
enterKey.addEventListener("keydown", ((e) => {
  if (e.keyCode == 13 && !e.shiftKey)
  {
    // prevent enter
    e.preventDefault();
    newLine();
    //alert("ok");
    return false;
    }
  }));

let itemCount = [0];

const newLine = () => {
  console.log(`New line coming right up!`);

  const list = document.querySelector(`#listContainer`);
  const newListItem = document.createElement(`li`);
  const newTextArea = document.createElement(`textarea`);
  newTextArea.classList.add(`listItem`);
  newListItem.appendChild(newTextArea);
  focus(newListItem);
  list.appendChild(newListItem);
};

  // const newLine = () => {
//   let i = document.getElementsByClassName("listItem").length - 1;
//   console.log("This is i: " + i);
//   const newInput = document.getElementById("listItem" + i);
  
// };