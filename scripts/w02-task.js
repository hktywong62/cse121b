/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = `Tak Yiu Wong`;
let curentYear = '2023';
let profilePicture = 'images/myImage.jpeg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('main#home picture img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = 'currentYear';
/*imageElement.setAttribute("src", profilePicture);*/
imageElement.src = 'images/myImage.jpeg';
imageElement.setAttribute("alt", `Profile image of Tak Yiu Wong`);
/*imageElement.alt = "Profile Picture";*/

/* Step 5 - Array */

let favoriteFood = [
    "curry chicken",
    "lemon chicken",
    "spicy chicken",
    "roast chicken",
    "crazy chicken",
    "Mexican chicken",
];

let ourFavoriteFood = favoriteFood.join(',');
foodElement.innerHTML = ourFavoriteFood;

/* add an item to the array*/
let greatFood = 'fried chicken';

favoriteFood.push(greatFood);
ourFavoriteFood = favoriteFood;

foodElement.innerHTML += `<br>${ourFavoriteFood}`;

/* remove the first item from the array */

favoriteFood.shift();
ourFavoriteFood = favoriteFood;

foodElement.innerHTML += `<br>${ourFavoriteFood}`;

/* remove the first item from the array */

favoriteFood.pop();
ourFavoriteFood = favoriteFood;

foodElement.innerHTML += `<br>${ourFavoriteFood}`;









