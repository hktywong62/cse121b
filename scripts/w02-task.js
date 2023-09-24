/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Tak Yiu Wong';
let currentYear = '2023';
let ProfilePicture = 'images/myImage.jpeg/';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('image');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = '2023';
imageElement.setAttribute("src", "images/myImage.jpeg");
imageElement.setAttribute("alt", `Profile image of Tak Yiu Wong`);

/* Step 5 - Array */

const favoriteFood = [
    'Curry Chicken', 
    'Barbecued Chicken',
    'Lemon Chicken', 
    'Spicy Chicken', 
    'Texas Chicken'
]; 

document.querySelector("#food").textContent = 'favoriteFood';

foodElement.innerHTML += `<br>${favoriteFood}`;

//foodElement.innerHTML +=  `<br>favoriteFood.join(',')`;

let singleFood = 'Baked Solmon';
favoriteFood.push(singleFood);
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;





