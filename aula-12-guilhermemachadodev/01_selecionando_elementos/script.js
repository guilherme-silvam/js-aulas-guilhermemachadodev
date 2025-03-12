let titulo = document.getElementById("titulo");
console.log("Selecionado por ID:", titulo);

let paragrafos = document.getElementsByClassName("texto");
console.log("Selecionado por Classe:", paragrafos);

let divs = document.getElementsByTagName("div");
console.log("Selecionado por Tag:", divs);

let primeiroParagrafo = document.querySelector("p");
let todosOsParagrafos = document.querySelectorAll("p");
console.log("Primeiro <p>:", primeiroParagrafo);
console.log("Todos os <p>:", todosOsParagrafos);
