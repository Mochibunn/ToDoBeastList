console.log(`Hello from index.js!`); // debug test

const listTitle = document.querySelector("#listTitleInput");

window.addEventListener("load", (() => {
  if (localStorage.getItem(`title`) === null){
    localStorage.setItem(`title`, ``);
    return;
  }
  const titleStore = localStorage.getItem(`title`);
  console.log(`Here is the tab title!`);
  console.log(titleStore);
  listTitle.value = titleStore;
  document.title = titleStore + ` | To-Do Beast List`;
}));

listTitle.addEventListener("keyup", (() => {
  if (listTitle.value !== ``){
    const titleTrim = listTitle.value.trim();
    localStorage.setItem(`title`, titleTrim);
    document.title = titleTrim + ` | To-Do Beast List`;
  } else {
  document.title = `Untitled | To-Do Beast List`;
  };

  listTitle.addEventListener("blur", (() => {
    const titleTrim = listTitle.value.trim();    
    listTitle.value = titleTrim;
  }));


  // listTitle.value !== `` ? document.title = listTitle.value + ` | To-Do Beast List` : document.title = `Untitled | To-Do Beast List`;
})); // * Function to change the tab title with the To-Do list title