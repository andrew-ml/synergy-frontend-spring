function outputInterval(str, time) {

  setTimeout(() => {
    console.log(str)
  }, time);
}

// outputInterval('Hello', 2000);


/// second task

function mySetInterval(callback, time) {

  setTimeout(function () {
    mySetInterval(callback, time);
    callback()
  }, time);


};

// mySetInterval(function () {
//   console.log("hello")
// }, 1000); 