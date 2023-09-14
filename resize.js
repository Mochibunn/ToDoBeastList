console.log(`Hello from resize.js!`);

const txtarea = document.querySelectorAll(".listItem");
// console.log(txtarea);
for (let i = 0; i < txtarea.length; i++) {
  txtarea[i].setAttribute("style", "height:" + (txtarea[i].scrollHeight) + "px;overflow-y:hidden;");
  txtarea[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}