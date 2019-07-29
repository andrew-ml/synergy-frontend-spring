let title = document.getElementsByClassName("accordionn-title");
let cont = document.getElementsByClassName("accordionn-cont");

for (i = 0; i < title.length; i++) {
  title[i].addEventListener("click", function() {
    if (!this.classList.contains("active")) {
      for (i = 0; i < title.length; i++) {
        title[i].classList.remove("active");
      }
      this.classList.add("active");
    }
  });
}
