console.log(`Hello from index.js!`); // debug test

const listTitle = document.querySelector("#listTitleInput");
listTitle.addEventListener("keyup", (() => {
  listTitle.value !== `` ? document.title = listTitle.value + ` | To-Do Beast List` : document.title = `Untitled | To-Do Beast List`;
})); // * Function to change the tab title with the To-Do list title

