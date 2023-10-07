/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {

    name: 'Tak Yiu Wong',

    photo: 'images/myImage.jpeg',

    favoriteFoods: [
        'Rice',
        'Tikka Masala',
        'Prioshki',
        'Shrimp',
        'Banana Cream Pie'
    ],
    hobbies: [
        'swimming', 'hiking', 'reading', 'travelling', 'watching movies'
    ],

    placesLived: [

    ],

};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'San Francisco, CA',
        length: '1 year'
    },
    {
        place: 'Provo, UT',
        length: '2 years'
    },
    {
        place: 'Honolulu, HI',
        length: '3 years'
    },
    {
        place: 'HongKong',
        length: '4 years'
    }
);



/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */

document.querySelector("#photo").src = 'images/myImage.jpeg';

document.querySelector("#photo").alt = 'Tak Yiu Wong';


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  })


/* Places Lived DataList */

for (let i = 0; i < myProfile.placesLived.length; i++) {
    
    let dt = document.createElement('dt');
    dt.textContent = myProfile.placesLived[i].place;

    let dd = document.createElement('dd');
    dd.textContent = myProfile.placesLived[i].length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);

}
