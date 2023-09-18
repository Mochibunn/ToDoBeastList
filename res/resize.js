console.log(`Hello from resize.js!`);

export const txtResize = (e) => { //function that automatically resizes the list item depending on the amount of text, accepts element
  e.setAttribute("style", "height:" + (e.scrollHeight) + "px;overflow-y:hidden;");
  e.addEventListener("input", OnInput, false);
};

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
};

// for (let i = 0; i < e.length; i++) {
//   e[i].setAttribute("style", "height:" + (txtarea[i].scrollHeight) + "px;overflow-y:hidden;");
//   e[i].addEventListener("input", OnInput, false);
//? Old failed attempt



{/* To-do Beast List - a versatile, flexible to-do list using JS 
Copyright (C) 2023  Mochibun

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. 

hi@mochibun.me */}