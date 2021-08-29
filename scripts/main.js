"use strict";
console.log("Hello Devesh");
const ToggleNavigation = () => {
  let nav__links = document.querySelector(".links__container");
  let menuButton = document.querySelector("#menu");
  if (nav__links.style.left == "-100%" || nav__links.style.left == "") {
    nav__links.style.left = "0px";
    menuButton.classList.remove("menu");
    setTimeout(() => {
      menuButton.classList.add("close");
    }, 800);
  }
  else {
    nav__links.style.left = "-100%";
    menuButton.classList.add("menu");
    menuButton.classList.remove("close");
  }
}
const menuButton = document.querySelector("div#menu");
try {
  menuButton.addEventListener("click", ToggleNavigation);
} catch (error) {}