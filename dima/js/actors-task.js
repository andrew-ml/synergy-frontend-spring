let actors = [{
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
  },
]

// hasOskar(actors);
// showWomenCount(actors);
// showFullName(actors);
// showNamesYoungerThan60(actors);
// addElement(actors);
// replaceActor(actors);
// sortByOldest(actors);
// showNameAndOskars(actors);
// showMensWithoutOscarsAndOldest50(actors);
// showWomensWithOscar(actors);

function hasOskar(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].oscars > 0) {
      arr[i].hasOskar = true;
    } else {
      arr[i].hasOskar = false;
    }
  }

  console.log(arr);
}


function showWomenCount(arr) {

  let womenCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "female") {
      womenCounter++;
    }
  }

  console.log(`Женщин в списке ${womenCounter}`);
}



function showFullName(arr) {

  let fullNamesArr = arr.map(function (arr) {
    return arr.name + ' ' + arr.lastName;
  });

  console.log(fullNamesArr);
}

function showNamesYoungerThan60(arr) {

  let fullNamesArr = arr.map(function (arr) {
    if (arr.yearBorn > 1959) {
      return arr.name + ' ' + arr.lastName;
    }
  })

  for (let i = 0; i < fullNamesArr.length; i++) {

    if (fullNamesArr[i] === undefined) {
      fullNamesArr.splice(i, 1);
      i--;
    }
  }

  console.log(fullNamesArr);
}


function addElement(arr) {

  let addedActor = {
    name: "Benedict",
    lastName: "Kiberdvach",
    yearBorn: 1976,
    oscars: 1,
    gender: "male"
  }

  arr.push(addedActor);
}


function replaceActor(arr) {
  let cutElement = arr.shift();
  arr.push(cutElement);
  console.log(arr);
}


function sortByOldest(arr) {

  sortedArr = arr.sort(function (a, b) {
    return a.yearBorn - b.yearBorn;
  })

  console.log(sortedArr);
}

function showNameAndOskars(arr) {

  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i].name} ${arr[i].lastName} has ${arr[i].oscars} oscars`);
  }

}


function showMensWithoutOscarsAndOldest50(arr) {

  for (let i = 0; i < arr.length; i++) {

    if (
      (arr[i].gender === "male") && (arr[i].yearBorn < 1969) && (arr[i].oscars === 0)) {
      console.log(arr[i]);
    }

  }
}


function showWomensWithOscar(arr) {

  for (let i = 0; i < arr.length; i++) {

    if (
      (arr[i].gender === "female") && (arr[i].oscars > 0)) {
      console.log(arr[i]);
    }

  }

}