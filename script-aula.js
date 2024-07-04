// const animais = document.getElementById("animais");
// console.log(animais);

const gridSectionHTML = document.getElementsByClassName("grid-section");
console.log(gridSectionHTML);

const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector("animais-lista li:last-child");
const linkInteiro = document.querySelector('[href^="#"]');
const ul = document.querySelector("ul");

const gridSectionNode = document.querySelectorAll(".grid-section");

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
