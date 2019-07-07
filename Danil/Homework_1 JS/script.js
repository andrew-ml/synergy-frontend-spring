// Задание 1

let user = {
  name: "",
  age: ""
};

let name = prompt("Введите ваше имя!", "");
let age = prompt("Введите ваш возраст!", "");

user.name = name;
user.age = age;

alert("Имя:" + user.name + " Возраст:" + user.age);

// Задание 2

let num1 = +prompt("Введите первое число", "");
let num2 = +prompt("Введите второе число", "");

function sum() {
  alert(num1 + num2);
}

sum();
