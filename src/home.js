export default function setUpHomePage() {
  const main = document.querySelector(".main");
  main.classList.add("h100");

  const introduction = document.createElement("div");
  introduction.classList.add("introduction");

  const introText = document.createElement("h1");
  introText.textContent = "Bienvenidos";
  introText.classList.add("intro-text");

  const text = document.createElement("p");
  text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate sapien nec sagittis aliquam malesuada.";
  text.classList.add("text");

  main.appendChild(introduction);

  introduction.appendChild(introText);
  introduction.appendChild(text);
}
