console.log(`Hello from index.js!`); // test

const listTitle = document.querySelector("#listTitleInput");
listTitle.addEventListener("keyup", (() => {
  console.log(listTitle.value);
  listTitle.value !== `` ? document.title = listTitle.value + ` | To-Do Beast List` : document.title = `Untitled | To-Do Beast List`;
})); // * Function to change the tab title with the To-Do list title

