function toggleMenu(menu) {
  const isMenuOpen = menu.classList.contains("show");

  if (isMenuOpen) {
    menu.classList.remove("show");
    // remove show class
  } else {
    menu.classList.add("show");
  }
  // else add show class
}

function navigation() {
  const menuButton = document.querySelector(".header_menu-button");
  const menu = document.querySelector(".nav-mobile-black");

  menuButton.addEventListener("click", () => toggleMenu(menu));
}

export default navigation;
