const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

//Hamburger di klik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik luar sidebar buat ngilangin nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
