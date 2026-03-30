const box1 = document.querySelector(".box1");

const box2 = document.querySelector(".box2");

console.log("box1 is ", box1);
console.log("box2 is ", box2);

// events in the browser
box1.addEventListener("click", () => {
  // move the box to the right
  box1.innerHTML = "Clicked";
  box1.classList.toggle("moveBox");
});

// when box2 is clicked it should have a yellow background and move to the left
box2.addEventListener;

// default/ option parameters

// function greetPerson(name, language = "english") {
//   if (language !== "english") {
//     console.log("Hola ", name);
//   }
//   console.log("hello " + name);
// }

// greetPerson("james");
