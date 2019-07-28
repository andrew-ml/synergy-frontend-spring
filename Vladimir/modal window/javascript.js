let dropdown = document.querySelector(".dropdown");
let button = dropdown.querySelector(".dropdown-button");
let list = dropdown.querySelector(".dropdown-list");
let close = dropdown.querySelector(".close-button");
let save = dropdown.querySelector(".save-button");
let xxx = dropdown.querySelector(".xxx-button");

button.addEventListener("click", function() {
  if (list.classList.toggle("active")) {
    document.body.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
  } else document.body.style.backgroundColor = `rgba(255, 255, 255)`;
});

close.addEventListener("click", function() {
  list.classList.toggle("active");
  document.body.style.backgroundColor = `rgba(255, 255, 255)`;
});

save.addEventListener("click", function() {
  list.classList.toggle("active");
  document.body.style.backgroundColor = `rgba(255, 255, 255)`;
});

xxx.addEventListener("click", function() {
  list.classList.toggle("active");
  document.body.style.backgroundColor = `rgba(255, 255, 255)`;
});
