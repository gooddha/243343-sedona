var link = document.querySelector(".booking-form-show");
var modal = document.querySelector(".booking-form-container");

link.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.toggle("modal-content-show");
});
