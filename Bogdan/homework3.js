// section 1//
// task 1
// var a = ["A", "B", "C"];
// var b = "==";
// function toString() {
//   var c = a.join(b);
//   console.log(c);
// }
// toString();
// task 2

// task 3
// let myArray = [1, 2, 3, 4, 5, 6];
// let it = myArray.length;

// for (let i = 0; i < it; i++) {
//   for (let j = 0; j < myArray.length; j++)
//     if (myArray[j] % 2 === 0) {
//       myArray.splice(j, 1);
//       break;
//     }
// }

// console.log(myArray);

// 4 task
// var x = [123, -23, 0, 46, -34, 3.23];
// function removeNegative(arr) {
//   for (var i = 0, j = 0, l = arr.length; i < l; i++) {
//     if (arr[i] >= 0) {
//       arr[j++] = arr[i];
//     }
//   }
//   arr.length = j;
//   return arr;
// }
// console.log(removeNegative(x));

// section 2

let actors = [
  {
    name: "Robert",
    lastName: "De Niro",
    yearBorn: 1943,
    oscars: 2,
    gender: "male"
  },
  {
    name: "Amy",
    lastName: "Adams",
    yearBorn: 1974,
    oscars: 0,
    gender: "female"
  },
  {
    name: "Jack",
    lastName: "Nicholson",
    yearBorn: 1937,
    oscars: 3,
    gender: "male"
  },
  {
    name: "Julia",
    lastName: "Roberts",
    yearBorn: 1967,
    oscars: 1,
    gender: "female"
  },
  {
    name: "Halle",
    lastName: "Berry",
    yearBorn: 1966,
    oscars: 1,
    gender: "female"
  },
  { name: "Tom", lastName: "Hanks", yearBorn: 1956, oscars: 2, gender: "male" },
  {
    name: "Leonardo",
    lastName: "DiCaprio",
    yearBorn: 1974,
    oscars: 0,
    gender: "male"
  },
  {
    name: "Morgan",
    lastName: "Freeman",
    yearBorn: 1937,
    oscars: 1,
    gender: "male"
  },
  {
    name: "Johnny",
    lastName: "Depp",
    yearBorn: 1963,
    oscars: 0,
    gender: "male"
  },
  {
    name: "Angela",
    lastName: "Bassett",
    yearBorn: 1958,
    oscars: 0,
    gender: "female"
  },
  {
    name: "Halle",
    lastName: "Berry",
    yearBorn: 1966,
    oscars: 1,
    gender: "female"
  }
];

// 1 task

// 2 task
// var sum = actors.reduce(function(prevValue, currentValue) {
//   console.log('prevValue' = '+prevVelue');
//   return;
// });
// console.log(sum);
// 3 task

// var nameLastname = actors.map(function(actorName) {
//   return actorName.name + " " + actorName.lastName;
// });
// console.log(nameLastname);

//4 task
// var nameLastname = actors.map(function(actorName) {
//   if (actorName.yearBorn >= 1959) {
//     return actorName.name + " " + actorName.lastName;
//   }
// });
// console.log(nameLastname);

//5 task
// actors.push({
//   name: "Ivan",
//   lastName: "Ivanov",
//   yearBorn: 1999,
//   oscars: 3,
//   gender: "male"
// });
// console.log(actors);

// 6 task
// function func() {
//   let actor = actors.shift();
//   actors.push(actor);
//   console.log(actors);
// }
// func();

//7 task
// function actorsAge() {
//   var age = 2019 - actors.yearBorn;
//   actors.sort((prev, next) => age - age);
//   console.log(actors);
// }
//////////////////////////////////////
// actors.sort(function(a, b) {
//   return a.yearBorn > b.yearBorn ? 1 : -1;
// });

// console.log(actors);

//8 task
// function actor(actors) {
//   for (i = 0; i <= actors.length; i++) {
//     console.log(actors[i].name + " " + actors[i].oscars + "oscars");
//   }
// }
// actor(actors);

// 9 task
// var nameLastname = actors.map(function(actorName) {
//   if (
//     actorName.yearBorn >= 1969 &&
//     actorName.oscars == 0 &&
//     actorName.gender == "male"
//   ) {
//     return actorName.name + " " + actorName.lastName;
//   }
// });
// console.log(nameLastname);

// 10 task
// var nameLastname = actors.map(function(actorName) {
//   if (actorName.oscars >= 1 && actorName.gender == "female") {
//     return actorName.name + " " + actorName.lastName;
//   }
// });
// console.log(nameLastname);

// section 3

let arr = [];

for (let i = 1; i <= 1000000; i++) {
  arr[i] = "a";
}

let timeInitial = performance.now();

arr.push("a");
let pushTime = performance.now() - timeInitial;
console.log(pushTime);

arr.unshift("a");
let unshiftTime = performance.now() - timeInitial;
console.log(unshiftTime);

arr.shift("a");
let shiftTime = performance.now() - timeInitial;
console.log(shiftTime);

console.log(`push быстрее чем shift в ${pushTime / shiftTime} раз`);
