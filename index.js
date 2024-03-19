// Follow along with the examples here
function doNothing() { }

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}


function sayHelloToLiz() {
    console.log("Hello, Liz!");
}


function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomething(hi) {
    console.log(hi);
}
doSomething("Hi Tim!");

function sayHelloTo(name) {
    console.log(`Hello, ${name}!`);
}

sayHelloTo("Tim");
sayHelloTo("Liz");
sayHelloTo("Jane");
sayHelloTo(1);

function say(greeting, name) {
    console.log(`${greeting}, ${name}`);
}
say("Goodbye", "Julio");

function add(x, y) {
    return x + y;
}
console.log(add(12, 78));

function say(greeting, name) {
    return `${greeting}, ${name}!`;
}
console.log(say("Hello", "Tim"));

// const sum = add(num1, num2);
// const message = `The sum is: ${sum}`;

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}
console.log(say("Hello", "Baros"));

function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Jedidiah"));

// const firstName = "Tim";
// const secondName = "Baros";
// const message = "I love Programming!";

// function say(firstName, secondName) {
//     console.log(`${message}`);
//     return `${firstName}, ${secondName}`;
// }
// console.log(say(firstName, secondName));

const firstName = 'Tim';
const secondName = 'Baros';
// const message = "I love Programming!"; // Declare 'message' before its usage

function say(firstName, secondName) {
    console.log("I love Programming!");
    return `${firstName}, ${secondName}`;
}

console.log(say(firstName, secondName));
