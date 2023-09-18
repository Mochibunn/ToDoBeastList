import { renderTodo } from "./update.js"; //import variables
import { todoItems, addTodo, setTodoItems } from "./create.js"; //import variables
import "./title.js";
import "./complete.js";
import "./delete.js";
import "./resize.js"

window.addEventListener("load", (() => { //when the window loads
  localStorage.getItem("theme");
  if (todoItems.length === 0) { //if the length of the array is 0 
    addTodo(`Click me to start editing!`); //add the first list item
  }
}));
document.addEventListener('DOMContentLoaded', () => { //when the entire DOM loads 
  const ref = localStorage.getItem('todoItems'); //grab the data from local storage
  if (ref) { //if there's something
    setTodoItems(JSON.parse(ref)); //turn the data back into the array
    todoItems.forEach(t => { //for each object in the array, ..
      renderTodo(t);//.. run the function that passes the object's keys and values to it
    });
  }
});

const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");

const calcSet = ({ localStorageTheme, systemSettingDark }) => {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
};
const updateBtn = ({ btnE, isDark }) => {
  const btnStatus = isDark ? "💡" : "🌙";
  btnE.setAttribute("aria-label", btnStatus);
  btnE.innerText = btnStatus;
};
const updateThm = ({ theme }) => {
  document.querySelector("html").setAttribute("data-theme", theme);
};
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = calcSet({ localStorageTheme, systemSettingDark });
updateBtn({ btnE: button, isDark: currentThemeSetting === "dark" });
updateThm({ theme: currentThemeSetting });
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  updateBtn({ btnE: button, isDark: newTheme === "dark" });
  updateThm({ theme: newTheme });
  currentThemeSetting = newTheme;
});

//! Line 17: Usually, this line would be written as:
//?  "todoItems = JSON.parse(ref);"
//! But this code doesn't work on imported variables.

//! Imported variables will ALWAYS be imported as read-only variables aka a const, no matter if you declared your export variable as a let or var

//! In this case, we need to create an export variable that will contain a function that would accept your data and manipulate the variable from within the original file. In our case, back in 'create.js', we have a function 'setTodoItems'.