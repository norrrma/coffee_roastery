import myFunction, { multiply } from "./myModule";

myFunction();

const result = multiply(2, 5);

console.log(result);

// function showMenu() {
//   const menu = document.getElementById("nav-mobile-black");
//   menu.classList.add("show");
// }

function toggleMenu() {
  const menu = document.getElementById("nav-mobile-black");

  const isIncluded = menu.classList.contains("show");

  if (isIncluded) {
    menu.classList.remove("show");
    // remove show class
  } else {
    menu.classList.add("show");
  }
  // else add show class
}

const burgerMenu = document.getElementById("burger_menu");
console.log(burgerMenu);
burgerMenu.onclick = toggleMenu;
