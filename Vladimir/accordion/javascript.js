let buttons = document.querySelectorAll("[data-select-page]");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const selectPage = this.dataset.selectPage;
    let page = document.querySelector(`[data-page-id="${selectPage}"]`);
    let pages = document.querySelectorAll("[data-page-id]");
    pages.forEach(function(page) {
      page.classList.toggle("active", false);
    });
    page.classList.toggle("active");
  });
});
