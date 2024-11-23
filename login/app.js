function toggleMenu() {
  const navRight = document.querySelector(".nav-right");
  navRight.classList.toggle("active");
}

document.querySelectorAll(".nav-right a").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-right").classList.remove("active");
  });
});

document.addEventListener("click", (event) => {
  const navRight = document.querySelector(".nav-right");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  if (
    !navRight.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    navRight.classList.remove("active");
  }
});
