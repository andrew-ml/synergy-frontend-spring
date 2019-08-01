///deep clone

// exports.deepCopy = function (obj) {

//   if (typeof obj !== "object") {

//     return obj;
//   }

//   var copy = obj.constructor();

//   for (var key in obj) {

//     if (typeof obj[key] === "object") {
//       copy[key] = this.deepCopy(obj[key]);
//     } else {
//       copy[key] = obj[key];
//     }
//   }

//   return copy;
// };


//accordeon-widget


// let buttons = document.querySelectorAll('[data-select-part]');

// buttons.forEach(function (button) {
//   button.addEventListener('click', function () {
//     let selectPart = this.dataset.selectPart;
//     let content = document.querySelector(`[data-content-id=${selectPart}`);

//     let contentParts = document.querySelectorAll(`[data-content-id]`);

//     contentParts.forEach(function (content) {
//       content.classList.toggle('active', false);
//     });
//     content.classList.toggle('active');
//   })
// });



//modal window

// const modalBtn = document.querySelector('.modal-window-btn');
// const modalWindow = document.querySelector('.modal-window');
// const modalBtnClose = document.querySelector('.closed-modal-btn')


// modalBtn.addEventListener('click', function () {
//   modalWindow.classList.toggle('active', true);
// })

// modalBtnClose.addEventListener('click', function () {
//   modalWindow.classList.toggle('active', false);
// })


// let btn = document.querySelector('.change-font-size');

// btn.addEventListener('click', function () {
//   btn.innerHTML = '';
// })

// console.log(btn);