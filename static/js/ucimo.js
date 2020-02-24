// Function
// Function test
function test(yourName){
    var result = 'Hello ' + yourName;
    console.log(result);
}
var ime = 'Pikachu';
test(ime);

// Function sumNumbers
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(20, 10);


// While loop
var num = 0;

while(num < 10){
    num += 1;
    console.log(num);
}

// For loop
for(let num = 0; num <= 10; num++){
    console.log(num);
}


// Data types
let yourAge = 23; // number
let yourName = 'Kristijan'; // string
let name = {first: 'Pero', lastname: 'Peric'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'orange']; // array
let random; // undefined
let nothing = null; // value null

// String in JavaScript
let fruits = 'banana, apple, orange';
let moreFruits = 'banana\napple';

console.log(moreFruits);
console.log(fruits.length);
console.log(fruits.toUpperCase());
console.log(fruits.toLowerCase());
console.log(fruits.split(','));
console.log(fruits.split(''));

// Array
let fruits = ['banana', 'orange', 'ananas', 'apple'];
fruits = new Array('banana', 'orange', 'ananas', 'apple');

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// array common methods
console.log(fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.push('blackberries'), fruits);


// Object in JavaScript
let student = {
    first: 'Pero',
    last: 'Peric',
    age: 23,
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

//console.log(student.first);
//console.log(student.last);
//student.first = 'notPero'; // Change value
//console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());

// If Else
var age = 22;

if( (age >= 18) && (age <= 35) ){
    status = 'Dovoljno godina';
    document.getElementById("test").innerHTML = status;
    console.log(status);
}
else {
    status = 'Nedovoljno godina';
    document.getElementById("test").innerHTML = status; 
    console.log(status);
}

// Switch
switch (6){
    case 0:
        text = 'Pero';
        break;
    case 5:
        text = 'Kristijan';
        break;
    case 6:
        text = 'Ivona';
        break;
    default:
        text = 'Stjepan';
}

console.log(text);