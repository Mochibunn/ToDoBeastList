// delete.js

//  <ul class="listContainer js-listContainer" id="listContainer">
// <list="listItem">
// delBtn--button

import {show} from './update.js';

export let close = document.getElementsByClassName("delete-item");

export let forLoop= for(let i = 0; i < deleteItem.length; i++) {
    deleteItem[i].onclick == function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button

//  const listItem = document.createElement(`li`);
//   listItem.setAttribute(`class`, `listItem ${isChecked}`);

//   const newTextArea = document.createElement(`textarea`);
//   newTextArea.setAttribute(`rows`, `1`);
//   newTextArea.setAttribute(`class`, `liText`)
  
//    newTextArea.value = todo.txt;
//   newLabel.appendChild(newTextArea);

// const newBtn = document.createElement(`button`);
//   newBtn.setAttribute(`class`, `addBtn`);
//   newBtn.textContent = `+`;


function newElement() {
    // var li = document.createElement("li"); ---li=listItem
    // var inputValue = document.getElementById("myInput").value;--newTextArea.value = todo.txt;
    // var t = document.createTextNode(inputValue);
    // li.appendChild(t);
     if (todo.txt === '') {
    // if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }



// index.js

import {close, forLoop} from './delete';
