$(".menu-btn").on("click", function(event) {
  event.preventDefault();
  $(this).toggleClass("menu-btn-active");
  $(".nav_right").toggleClass("nav_right_active");
});
