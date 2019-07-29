// button.addEventListener('click', function () {
//   document.body.style.background = `rgba(${generateColor()}, ${generateColor()}, ${generateColor()})`;
//   document.body.style.marginLeft = `${generateColor()}px`;
//   document.body.style.marginTop = `${generateColor()}px`;
//   document.button.style.background = `rgba(${generateColor()}, ${generateColor()}, ${generateColor()})`;
// })

// function generateColor() {
//   return Math.floor(Math.random() * 256);
// }

// let list = document.querySelector(".dropdown-list");



// button.addEventListener('click', function () {
//   list.classList.toggle('active');
// })

// let button1 = document.querySelector('.btn-1');
// let button2 = document.querySelector('.btn-2');
// let button3 = document.querySelector('.btn-3');

// let page1 = document.querySelector('.page-1');
// let page2 = document.querySelector('.page-2');
// let page3 = document.querySelector('.page-3');


// button1.addEventListener('click', function () {
//   page1.classList.toggle('active');
//   page2.classList.toggle('active', false);
//   page3.classList.toggle('active', false);
// })

// button2.addEventListener('click', function () {
//   page1.classList.toggle('active', false);
//   page2.classList.toggle('active');
//   page3.classList.toggle('active', false);
// })

// button3.addEventListener('click', function () {
//   page1.classList.toggle('active', false);
//   page2.classList.toggle('active', false);
//   page3.classList.toggle('active');
// })


let buttons = document.querySelectorAll('[data-select-page]');

let pages = document.querySelectorAll('[data-page-id]');


buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('[data-page-id]').forEach(function (noActivePage) {
      noActivePage.classList.toggle('active', false);
    })
  })

})