let lst = document.querySelector("button").classList;

document.addEventListener("keydown", function (event) {
  document.querySelector("." + event.code).classList.add("click");
});
document.addEventListener("keyup", function (event) {
  document.querySelector("." + event.code).classList.remove("click");
});
