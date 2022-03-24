const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
  password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye icon
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});

$(".fb").hover(function () {
  $(this).addClass("text-active");
  $(this).removeClass("text-inactive");
  $(".google").addClass("text-inactive");
  $(".google").removeClass("text-active");
});

$(".google").hover(function () {
  $(this).addClass("text-active");
  $(this).removeClass("text-inactive");
  $(".fb").addClass("text-inactive");
  $(".fb").removeClass("text-active");
});
