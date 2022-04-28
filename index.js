const nav = document.querySelector(".nav-menu");
const burger = document.querySelector(".burger-img");
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
