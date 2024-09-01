import "./style.css";

const dropDownBtn = document.querySelector(".dropbtn");

dropDownBtn.addEventListener("click", () => {
  const dropDownItems = document.querySelector(".dropdown-items");
  dropDownItems.classList.toggle("none");
});
