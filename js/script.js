var link = document.querySelector(".booking-form-show");
var modal = document.querySelector(".booking-form-container");

modal.classList.add("modal-content-hide");

link.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.toggle("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    modal.classList.remove("modal-content-show");
  }
});
//
// minus.addEventListener("click", function(event) {
//   adults.value = adults.value--;
//   // modal.classList.toggle("modal-content-z-index");
// });


// var counterLess = modalForm.querySelectorAll(".form-counter-less");
// var counterMore = modalForm.querySelectorAll(".form-counter-more");
// var inputs = modalForm.querySelectorAll(".form-counter-wrapper input");
// for (var i = 0; i < inputs.length; i++) {
// (function(i) {
// counterLess[i].addEventListener("click", function(event) {
// event.preventDefault();
//
// if (inputs[i].value > 0) {
// inputs[i].value = —inputs[i].value;
// }
// });
// counterMore[i].addEventListener("click", function(event) {
// event.preventDefault();
//
// inputs[i].value = ++inputs[i].value;
// });
// }(i));
// }
