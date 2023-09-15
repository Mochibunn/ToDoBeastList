console.log(`Hello from update.js! ENGINE REWORK IN PROGRESS`);


export const show = (todo) => {
  const list = document.querySelector(`.listContainer`);

  const isChecked = todo.checked ? `checked` : ``;
  const listItem = document.createElement(`li`);
  listItem.setAttribute(`class`, `listItem ${isChecked}`);
  listItem.setAttribute(`data-key`, todo.id);
  const newChkBox = document.createElement(`input`);
  newChkBox.setAttribute(`id`, todo.id);
  newChkBox.setAttribute(`type`, `checkbox`);
  const newLabel = document.createElement(`label`);
  newLabel.setAttribute(`for`, todo.id);
  newLabel.setAttribute(`class`, `tick js-tick`); //TODO Check classes!
  const newTextArea = document.createElement(`textarea`);
  newTextArea.setAttribute(`class`, `liText`)
  newTextArea.value = todo.txt;
  newLabel.appendChild(newTextArea);
  const delBtn = document.createElement(`button`);
  delBtn.setAttribute(`class`, `delete-item js-delete-item`); //! Check!
  const delIcon = document.createElement(`img`);
  delIcon.setAttribute(`src`, `./res/img/recycle.svg`);
  delIcon.setAttribute(`alt`, `Recycle bin icon`); //* A11Y FTW
  delBtn.appendChild(delIcon);
  const newBtn = document.createElement(`button`);
  newBtn.textContent = `+`;

  listItem.appendChild(newChkBox);
  listItem.appendChild(newLabel);
  listItem.appendChild(delBtn);
  listItem.appendChild(newBtn);
  list.appendChild(listItem);
  newTextArea.focus()
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