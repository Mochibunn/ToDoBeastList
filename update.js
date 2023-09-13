console.log(`Hello from update.js!`);

setTimeout(()=> {
  const listTrack = document.querySelectorAll(".listItem"); //! There is an error here!
console.log(`Your listTrack clg from update.js:`);
console.log(listTrack);

listTrack.forEach(element => {
  console.log(`Your element:`);
  console.log(element);
    addEventListener("blur", () => {
    console.log(`Hello from the function!`);
    const trimmed = element.value.trim();
    console.log(listTrack.id);
    localStorage.setItem(element.id, trimmed);
  });
});
}, 1000);