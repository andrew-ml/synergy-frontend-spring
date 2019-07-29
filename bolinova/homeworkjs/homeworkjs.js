/*Написать метод mySplice, который будет делать то же самое, что и стандартный splice.
Пример использования:
let x = [1, 2, 3]; 
x.mySplice(0, 1, "X", "Y");
console.log(x); // ["X","Y", 2, 3]

Для создания нового метода для массивов используем конструкцию: Array.prototype.mySlice = function(first, amount, ...rest) {
	...
}
Доступ к массиву получаем с помощью ключевого слова this.*/

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.mySplice = function(start, toRemove, insert) {
  var remove = this.slice(start, start + toRemove);
  var temp = this.slice(0, start).concat(insert, this.slice(start + toRemove));
  this.length = 0;
  this.push.apply(this, temp);
  return remove;
};

console.log(arr.splice(3, 2, 6));
console.log(arr);

console.log(arr2.mySplice(3, 2, 6));
console.log(arr2);

//аккордеон
let headers = document.querySelectorAll("[data-select-page]");
let sections = document.querySelectorAll("[data-page-id]");

headers.forEach(function(title) {
  title.addEventListener("click", function() {
    console.log(title.dataset);
    const selectPage = title.dataset.selectPage;
    sections.forEach(function(section) {
      console.log(section.classList);
      section.classList.toggle("active", false);
    });

    let activeSection = document.querySelector(
      `[data-page-id="${selectPage}"]`
    );
    activeSection.classList.toggle("active", true);
  });
});
