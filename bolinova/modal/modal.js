let modal = document.querySelector(".modal");
let overflow = document.createElement("div");
function openWin() {
  overflow.className = "overflow";
  document.body.appendChild(overflow);
  var height = modal.offsetHeight;
  modal.style.marginTop = -height / 2 + "px";
  modal.style.top = "50%";
}

overflow.onclick = function() {
  modal.style.top = "-100%";
  overflow.remove();
};
