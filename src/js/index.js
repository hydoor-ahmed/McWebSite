const icon = document.querySelector(".icon");
const menu = document.querySelector(".menu");
const lis = document.querySelectorAll(".menu li");

icon.addEventListener("click", function () {
  if (menu.classList.contains("flex")) {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
    icon.classList.remove("bx-x");
  } else {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    icon.classList.add("bx-x");
  }
});

lis.forEach(function (li) {
  li.addEventListener("click", function () {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
    icon.classList.remove("bx-x");
  });
});
