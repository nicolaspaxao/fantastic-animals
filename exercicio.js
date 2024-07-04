// Retornar todas as imagens
const imgAll = document.querySelectorAll("img");
console.log(imgAll);
// Retornar apenas imagens que tenham a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);
//Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);
//Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);
//Selecione o último p do siter
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
const ultimoParagrafo = paragrafos[paragrafos.length - 1];
console.log(ultimoParagrafo);
