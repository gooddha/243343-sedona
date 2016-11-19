var link = document.querySelector(".booking-form-show");
var modal = document.querySelector(".booking-form-container");

link.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.toggle("modal-content-show");
  // modal.classList.toggle("modal-content-z-index");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    modal.classList.remove("modal-content-show");
    // modal.classList.toggle("modal-content-z-index");
  }
});
