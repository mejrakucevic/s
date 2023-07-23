
'use script'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {

        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

    }
   }

   const arr = [2, 3, 4];

   const a = arr[0];
   const b = arr[1];
   const c = arr[2];

   const [x, y, z] = arr;
   console.log(x, y, z);


   let [main, , secondary] = restaurant.categories;
   console.log(main, secondary);

   //const temp = main;
   //main = secondary;
   //secondary = temp;
   //console.log(main, secondary)

[main, secondary] = [secondary, main]
console.log(main, secondary);


// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested desstructring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i,j, k);

// default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);


const welcomeMessage = "Welcome to the most basic generic restourant on earth!"
console.log(welcomeMessage);
const menuu = ['Here is the menu:  1. burger', '2. pizza', '3. pasta']
console.log(menuu);
let alert = Number(prompt("Insert the number of your order: "));

 if (alert === 1) {
    console.log('You have ordered a burger!');
} else if (alert === 2) {
    console.log('You have ordered a pizza!');

} else if (alert === 3) {
    console.log('You have ordered pasta!');

}

const add = "Want something to drink?"
console.log(add);

const drinkMenu = ['Here is the menu:  1. cola', '2. pepsi', '3. water']
console.log(drinkMenu);

let alert2 = Number(prompt("Insert the number of your order: "))

if (alert2 === 1) {
    console.log('You have ordered cola!');
} else if (alert2 === 2) {
    console.log('You have ordered pepsi!');

} else if (alert2 === 3) {
    console.log('You have ordered water, good choice!');

}

