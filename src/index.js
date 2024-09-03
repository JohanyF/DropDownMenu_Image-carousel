import "./style.css";

import Choco1 from "./img/choco1.jpg";
import Choco2 from "./img/choco2.jpg";
import Choco3 from "./img/choco3.jpg";

const photosArr = [
  {
    alt: "Brown Chihuahua/Pomeranian Mix Dog named Choco",
    src: Choco1,
    id: 0,
  },
  {
    alt: "Brown Chihuahua/Pomeranian Mix Dog named Choco laying down relaxing",
    src: Choco2,
    id: 1,
  },
  {
    alt: "Brown Chihuahua/Pomeranian Mix Dog named Choco with dirt on his nose",
    src: Choco3,
    id: 2,
  },
];

const dropDownBtn = document.querySelector(".dropbtn");

dropDownBtn.addEventListener("click", () => {
  const dropDownItems = document.querySelector(".dropdown-items");
  dropDownItems.classList.toggle("none");
});

const imageCarousel = (photosArr) => {
  let currentIndex = 0;
  const circleBtns = document.querySelectorAll(".circle-btn");
  const imgSlides = document.querySelector(".img-slides");

  const dogPic = new Image();
  dogPic.src = photosArr[0].src;
  dogPic.alt = photosArr[0].alt;
  circleBtns[0].classList.add("selected");

  imgSlides.appendChild(dogPic);

  const prevBtn = document.querySelector("#prev");

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = photosArr.length - 1;
    }

    dogPic.src = photosArr[currentIndex].src;
    dogPic.alt = photosArr[currentIndex].alt;
    selectedPhoto(photosArr[currentIndex].id, circleBtns);
  });

  const nextBtn = document.querySelector("#next");

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > photosArr.length - 1) {
      currentIndex = 0;
    }

    dogPic.src = photosArr[currentIndex].src;
    dogPic.alt = photosArr[currentIndex].alt;
    selectedPhoto(photosArr[currentIndex].id, circleBtns);
  });

  circleBtns.forEach((circleBtn) => {
    circleBtn.addEventListener("click", (event) => {
      currentIndex = event.target.id;
      dogPic.src = photosArr[currentIndex].src;
      dogPic.alt = photosArr[currentIndex].alt;
      selectedPhoto(photosArr[currentIndex].id, circleBtns);
    });
  });

  setInterval(() => {
    currentIndex++;

    if (currentIndex > photosArr.length - 1) {
      currentIndex = 0;
    }

    dogPic.src = photosArr[currentIndex].src;
    dogPic.alt = photosArr[currentIndex].alt;
    selectedPhoto(photosArr[currentIndex].id, circleBtns);
  }, 5000);

  const selectedPhoto = (photoID, circleBtns) => {
    circleBtns.forEach((circleBtn) => {
      circleBtn.classList.remove("selected");
      if (parseInt(circleBtn.id, 10) === photoID) {
        circleBtn.classList.add("selected");
      }
    });
  };
};

imageCarousel(photosArr);
