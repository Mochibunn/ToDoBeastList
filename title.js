console.log(`Hello from index.js!`); //! Debug test
const listTitle = document.querySelector("#listTitleInput");


window.addEventListener("load", (() => {
  if (localStorage.getItem(`title`) === null){ //*If key does not exist
    localStorage.setItem(`title`, `Untitled`); //* Create new key with default text
    listTitle.value = `Untitled`; //* Set matching value to title
    document.title = listTitle.value + ` | To-Do Beast List`; //* Set matching value to tab title
    return; //* Stop executing the rest
  }; //* Should the if condition fail, run this 
  const titleStore = localStorage.getItem(`title`); //* Get title content
  console.log(`Here is the tab title!`); //! DEBUG
  console.log(titleStore);  //! DEBUG
  listTitle.value = titleStore; //* Set the list title to the key value
  document.title = titleStore + ` | To-Do Beast List`; //* Set tab title
}));//* Function that checks, retrieves and sets the list title as well as the tab title

listTitle.addEventListener("keyup", (() => {
  if (listTitle.value !== ``){
    const titleTrim = listTitle.value.trim();
    localStorage.setItem(`title`, titleTrim);
    document.title = titleTrim + ` | To-Do Beast List`;
  } else {
  document.title = `Untitled | To-Do Beast List`;
  };
})); //* Function to change the tab title with the To-Do list title

listTitle.addEventListener("blur", (() => {
  const titleTrim = listTitle.value.trim();    
  listTitle.value = titleTrim;
})); //* Function to trim the input field from any whitespace but only when the user switches to a different object. Doing it in the previous function would force trim the input, preventing any easy text separation