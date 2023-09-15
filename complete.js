import { todoItems } from "./create1.js";
import { show } from "./update.js";

export const list = document.querySelector(`.js-listContainer`);
list.addEventListener("click", e => {
  if (e.target.classList.contains(`js-tick`)) {
    const itmKey = e.target.parentElement.dataset.key;
    toggleDone(itmKey);
  }
});

const toggleDone = (key) => {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  show(todoItems[index]);
};