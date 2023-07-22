'use strict'

/* console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear)
    console.log(this);
}

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear)
    console.log(this);
}

calcAge(1980);

const jonas = {
    year: 1991,
    calcAge : function() {
        console.log(this);
    }
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;

const f = jonas.calcAge; 

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge : function() {
        console.log(this); 
        console.log(2037 - this.year)
    },

    greet: () => console.log(`Hey ${this.firstName}`)
};

jonas.greet(); 

let age = 30;
let oldAge = age;
age = 31;

console.log(age);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me); */

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);




const jessica2 = {
    firstName: 'jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Beth', 'Emily']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);


