/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Wong Tak Yiu';
let curentYear = '2023';
let profilePicture = 'images\myImage.jpeg';



/* Step 3 - Element Variables */

const nameElement = document.getElementByID('name');
const foodElement = document.getElementByID('food');
const yearElement = document.querySelectorById('#year');

const imageElements = document.getElementsByTagName('img');
const imageElement = imageElements[0];


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = '2023';
imageElement.setAttribute("src", "profilePicture");
imageElement.setAttribute("alt", `Profile image of Tak Yiu Wong`);


/* Step 5 - Array */

let favoriteFood = [
    "curry chicken",
    "lemon chicken",
    "spicy chicken",
    "Texa chicken",
];

foodElement = favoriteFood;






