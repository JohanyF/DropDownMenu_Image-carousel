import "./style.css";
import setUpHomePage from "./home.js";
import setUpMenuPage from "./menu.js";
import setUpAboutPage from "./about.js";

setUpHomePage();

const removeMainChild = () => {
  const main = document.querySelector(".main");
  const child = main.lastElementChild;
  child.remove();
};

const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", () => {
  removeMainChild();
  setUpHomePage();
});

const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
  removeMainChild();
  setUpMenuPage();
});

const aboutBtn = document.querySelector("#about");

aboutBtn.addEventListener("click", () => {
  removeMainChild();
  setUpAboutPage();
});
