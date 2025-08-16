const hamburger = document.getElementById("hamburger-menu");
const navbarNav = document.getElementById("navbarNav");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
});
