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
  {
    name: "Tom",
    lastName: "Hanks",
    yearBorn: 1956,
    oscars: 2,
    gender: "male"
  },
  {
    name: "Leonardo",
    lastName: "DiCaprio",
    yearBorn: 1974,
    oscars: 1,
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

// 1
// function addProperty(actors) {
//   for (i = 0; i <= actors.length; i++) {
//     if (actors[i].oscars > 0) {
//       actors[i].achievement = "hasOscar";
//     }
//   }
// }

// console.log(addProperty(actors));

//2

// function countWomen(women) {
//   let counter = 0;
//   if (women.gender == "female") {
//     counter++;
//   }
//   return counter;
// }

// console.log(`Актрис: ${actors.reduce(countWomen)}`);

//3

console.log(
  actors.map(function(name) {
    return name.name + " " + name.lastName;
  })
);

//4

function displayNames(year) {
  if (2019 - year.yearBorn < 60) {
    let result = year.name + " " + year.lastName;
    console.log(result.split(","));
  }
}

actors.filter(displayNames);

//5

let actor = {
  name: "Jim",
  lastName: "Jim Carrey",
  yearBorn: 1962,
  oscars: 0,
  gender: "male"
};
actors.push(actor);

console.log(actors);

//6

let lastElement = actors.shift();

actors.push(lastElement);

console.log(actors);

//7

actors.sort(function(a, b) {
  return a.yearBorn - b.yearBorn;
});

console.log(actors);

//8

function displayInformation(actors) {
  for (i = 0; i <= actors.length; i++) {
    console.log(
      actors[i].name +
        " " +
        actors[i].lastName +
        " = " +
        actors[i].oscars +
        " оскар(а)"
    );
  }
}

displayInformation(actors);

//9

function filteredMen(n) {
  return n.gender === "male" && n.oscars === 0 && 2019 - n.yearBorn > 50;
}

console.log(actors.filter(filteredMen));

//10

function filteredWomen(n) {
  return n.gender === "female" && n.oscars !== 0;
}

console.log(actors.filter(filteredWomen));
