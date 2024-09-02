import "./style.css";

import Choco1 from "./img/choco1.jpg";
import Choco2 from "./img/choco2.jpg";
import Choco3 from "./img/choco3.jpg";

const photosArr = [
  {
    alt: "Brown Chihuahua/Pomeranian Mix Dog named Choco",
    src: Choco1,
  },
  {
    alt: "Brown Chihuahua/Pomeranian Mix Dog named Choco laying down relaxing",
    src: Choco2,
  },
  {
    alt: "Brown Chihuahua/Pomeranian Mix Dog named Choco with dirt on his nose",
    src: Choco3,
  },
];

const dropDownBtn = document.querySelector(".dropbtn");

dropDownBtn.addEventListener("click", () => {
  const dropDownItems = document.querySelector(".dropdown-items");
  dropDownItems.classList.toggle("none");
});

const test = (photosArr) => {
  let currentIndex = 0;
  const imgSlides = document.querySelector(".img-slides");

  const dogPic = new Image();
  dogPic.src = photosArr[0].src;
  dogPic.alt = photosArr[0].alt;

  imgSlides.appendChild(dogPic);

  const prevBtn = document.querySelector("#prev");

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = photosArr.length - 1;
    }

    dogPic.src = photosArr[currentIndex].src;
    dogPic.alt = photosArr[currentIndex].alt;
  });

  const nextBtn = document.querySelector("#next");

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > photosArr.length - 1) {
      currentIndex = 0;
    }

    dogPic.src = photosArr[currentIndex].src;
    dogPic.alt = photosArr[currentIndex].alt;
  });

  const circleBtns = document.querySelectorAll(".circle-btn");

  circleBtns.forEach((circleBtn) => {
    circleBtn.addEventListener("click", (event) => {
      currentIndex = event.target.id;
      dogPic.src = photosArr[currentIndex].src;
      dogPic.alt = photosArr[currentIndex].alt;
    });
  });

  // TODO: Add a timeout which advances the slides every 5 seconds
};

test(photosArr);
