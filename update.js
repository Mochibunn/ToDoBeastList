console.log(`Hello from update.js! ENGINE REWORK IN PROGRESS`);


const show = (todo) => {
  const list = document.querySelector(`.listContainer`);

  const isChecked = todo.checked ? `checked` : ``;
  const listItem = document.createElement(`li`);
  listItem.setAttribute(`class`, `listItem ${isChecked}`);
  listItem.setAttribute(`data-key`, todo.id);
  

  const newChkBox = document.createElement(`input`);
  newChkBox.setAttribute(`id`, todo.id);
  newChkBox.setAttribute(`type`, `checkbox`);
  const newTextArea = document.createElement(`textarea`);
  newTextArea.classList.add(`listItem`);
  newTextArea.setAttribute(`id`, todo.id);
  newTextArea.value = (a);
  const newBtn = document.createElement(`button`);
  newBtn.classList.add(`listBtn`);
  newBtn.textContent = `+`;
  listItem.appendChild(newTextArea);
  listItem.appendChild(newBtn);
  list.appendChild(listItem);    


};









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