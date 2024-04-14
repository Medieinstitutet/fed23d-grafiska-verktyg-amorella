/* header + menu + nav */

const hamMenu = document.querySelector(".hamMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
