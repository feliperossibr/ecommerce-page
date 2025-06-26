const toggleButton = document.getElementById("menu-toggle");
const closeButton = document.getElementById("menu-close");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("menu-overlay");

function openMenu() {
  navMenu.classList.add("active");
  toggleButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
  overlay.classList.add("visible");
}

function closeMenu() {
  navMenu.classList.remove("active");
  toggleButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
  overlay.classList.remove("visible");
}

toggleButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

