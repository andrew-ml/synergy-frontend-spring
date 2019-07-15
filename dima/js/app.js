//while

// let i = 1;

// while (i <= 100) {
//   console.log(i);
//   i++;
// }


// do while

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// for 

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

let age = prompt("Enter the age");

if (age === '') {
  alert('The string is empty')
} else {
  switch (true) {
    case (age < 13):
      alert('child');
      break;
    case (age >= 13 && age <= 17):
      alert('teenager');
      break;
    case (age >= 18):
      alert('adult');
      break;
    default:
      alert("Incorrectly number");
      break;
  }
}