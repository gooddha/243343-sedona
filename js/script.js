var link = document.querySelector(".booking-form-show");
var modal = document.querySelector(".booking-form-container");
var minus = document.querySelector(".btn-minus");
var plus = document.querySelector(".btn-plus");
var adults = document.querySelector("#adults");
var children = document.querySelector("#children");

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

minus.addEventListener("click", function(event) {
  adults.value = adults.value--;
  // modal.classList.toggle("modal-content-z-index");
});
