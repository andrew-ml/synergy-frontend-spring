/*let animal = {
  color: "black",
  size: "small",
  name: "pushok"
};
console.log(animal);
document.write(animal.color);
animal.size = "big";
console.log(animal.size);
function showName() {
  alert(animal.name);
}
showName();
document.write(animal.name);*/
/*function myFunction() {
  let node = document.createElement("div");
  let textnode = document.createTextNode("More");
  node.appendChild(textnode);
  document.getElementById("buttons").appendChild(node);
}*/

/*let n = "string";
alert(n.toUpperCase());
[].push("something");*/

/*let first = 5;
let second = first;
console.log(first);
console.log(second);*/

/*console.log(5 + 5);
console.log(5 - 4);
console.log(2 * 2);
console.log(4 / 2);
console.log("hello" + " world");
console.log("Marina" + " Bolinova");
let z = 12;
z++;
console.log(z);
z--;
console.log(z);*/
/*

console.log(5 > 4);
console.log(2 >= 2);
console.log(234357 % 2);*/

//console.log(true == 1);
//console.log(true === 1);

/*
let sum = 5 * 5 + (10 % 3);
console.log(sum);*/
/*
let a = 5;
console.log(a !== 4);*/

/*let number = 5;
let number2 = 13.4;
console.log(5 / 0);
console.log(5 / "string");*/

/*let string = "This is string";
let string2 = "Theis is string too";

let sym = Symbol("name");*/

/*let f = 2;
console.log(f == 2);
console.log(f == 5);*/

/*let nothing;
console.log(nothing);
console.log(something);*/

/*let user = {
  name: "Marina",
  age: 24,
  sex: "woman",
  human: true,
  "favorite movie": "The Green mile",
  breathe: function() {
    console.log("I am alive!");
  }
};
console.log(user);
console.log(user.age);
console.log(user["favorite movie"]);*/

/*let arr = ["bumble", "smyle", "sad"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);*/

/*console.log(typeof []);
console.log(typeof {});
console.log(typeof 0);
console.log(typeof false);
console.log(typeof "string");
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof null);*/

/*let counter = 5;

/*if (counter == 4) {
  console.log(counter);
} else {
  console.log(0);
}*/

/*if (counter == 0) {
  console.log("Nothing to do here");
} else if (counter < 0) {
  console.log("Error!");
} else {
  console.log("In progress!");
}*/

/*let message = counter < 0 ? "Error!" : "In progress!";
console.log(message);*/

/*switch (counter) {
  case 0:
    console.log("Nothing to do here");
    break;

  case -1:
    console.log("Error!");
    break;

  case 5:
    console.log("In progress!");
    break;
  default:
    console.log("?????");
    break;
}*/

/*while (counter < 8) {
  console.log(counter);
  counter++;
}*/

/*do {
  console.log(counter);
  counter++;
} while (counter < 10);*/

/*for (let i = 1; i < 8; i++) {
  console.log(i);
}*/

/*function showName(name) {
  alert(name);
  console.log(name);
}
showName("Marina");*/

/*let student = "Ivan";
function changeName() {
  student = "John";
}
changeName();
console.log(student);*/

/*
function calculate(x, y) {
  return x + y;
}
console.log(calculate(3, 4));*/

/*let sum = (x, y) => x + y;

/*let sum = function(x, y) {
  return x + y;
};*/
/*console.log(sum(14, 12));*/

/*HOME WORK TASK 1*/
prompt("Ваше имя?");
prompt("Сколько вам лет?");
let user = {
  name: "Marina",
  age: 24
};
alert("Имя:" + user.name + " , возраст: " + user.age);

/*HOME WORK TASK 2*/
let a = prompt("Input A: ", "");
let b = prompt("Input B: ", "");
a = parseFloat(a);
b = parseFloat(b);
let c = Number(a) + Number(b);
alert(c);

/*HOME WORK TASK 1*/
let name = prompt("Write your name");
let age = prompt("Write your age");
alert("Имя:" + name + ", возраст: " + age);
