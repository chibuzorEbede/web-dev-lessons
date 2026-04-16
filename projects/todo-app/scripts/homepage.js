import { Category } from "./category.js";

// classes
const DesignCategory = new Category(
  "Design",
  { "task 1": "design a webpage" },
  "orange",
);
const MeetingCategory = new Category(
  "Meeting",
  {
    "task 1": "host a meeting",
  },
  "blue",
);
const LearningCategory = new Category(
  "Learning",
  {
    "task 1": "learn a course",
  },
  "green",
);

// DOM
const categoryDiv = document.querySelector(".category-id");

// create a new div element
const parentElement = document.querySelector(".categoryList");
const newCategoryDiv = document.createElement("div");
const newTitle = document.createElement("h4");
const newImg = document.createElement("img");
const newTask = document.createElement("ul");
const newAddBtn = document.createElement("span");

// new properties
newTitle.textContent = DesignCategory.title;
newImg.setAttribute("src", "../images/brush.png");
newTask.innerHTML = "<li>20 tasks </li>";
newAddBtn.innerText = "+";

newCategoryDiv.appendChild(newTitle);
newCategoryDiv.appendChild(newImg);
newCategoryDiv.appendChild(newTask);
newCategoryDiv.appendChild(newAddBtn);

newCategoryDiv.classList.add("category");
parentElement.append(newCategoryDiv);

// populate it with the categories data

// display it on the screen

console.log("design", DesignCategory);

function makeCategory() {}
