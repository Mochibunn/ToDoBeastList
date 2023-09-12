console.log(`Hello from index.js!`);

// const tabTitle = document.getElementById(`listTitleInput`).input;
// tabTitle.addEventListener("keydown", ((e) => {
//   document.title = e;
// };

document.ready(function() {
  input.keyup(function() {
      let text = this.value;
      document.title = text;
  });
});