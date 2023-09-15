console.log(`Hello from resize.js!`);



// const txtarea = document.querySelectorAll(".listItem");

export const txtResize = (e) => {
  console.log(`Hello from textResize!`);
  // for (let i = 0; i < e.length; i++) {
    e.setAttribute("style", "height:" + (e.scrollHeight) + "px;overflow-y:hidden;");
    e.addEventListener("input", OnInput, false);
  // };
};

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
};

// for (let i = 0; i < e.length; i++) {
//   e[i].setAttribute("style", "height:" + (txtarea[i].scrollHeight) + "px;overflow-y:hidden;");
//   e[i].addEventListener("input", OnInput, false);

