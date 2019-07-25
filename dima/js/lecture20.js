let result = [1, 123123, 31241324, 413242, 234132].reduce(sum, 0);

function sum(prev, current) {
  return prev + current;
}

//console.log(result);

let persons = [{
    name: "John",
    age: 20
  },
  {
    name: "Ira",
    age: 20
  },
  {
    name: "Masha",
    age: 20
  }
];


// included("Ira");


function included(str) {

  persons.filter(function (person, i) {
    console.log(person.name === str);
  })


}