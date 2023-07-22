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

const f = jonas.calcAge; */

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