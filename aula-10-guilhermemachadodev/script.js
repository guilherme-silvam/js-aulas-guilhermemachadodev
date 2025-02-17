// Guia Completo sobre Arrays em JavaScript

// ---------------------------------------------
// 1. Criando e Acessando Arrays
// ---------------------------------------------

// Criando um array de filmes
let filmes = ["Matrix", "Interestelar", "O Senhor dos Anéis"];

// Exibindo o array completo no console
console.log(filmes);

// Acessando elementos do array pelo índice
console.log(filmes[0]); // Primeiro elemento: "Matrix"
console.log(filmes[1]); // Segundo elemento: "Interestelar"
console.log(filmes[2]); // Terceiro elemento: "O Senhor dos Anéis"

// ---------------------------------------------
// 2. Arrays Multidimensionais
// ---------------------------------------------

// Criando um array bidimensional
let filmesDetalhados = [
    ["Matrix", "Neo", "Sci-Fi"],
    ["Interestelar", "Cooper", "Ficção Científica"],
    ["O Senhor dos Anéis", "Frodo", "Fantasia"]
];

// Exibindo o array em formato de tabela no console
console.table(filmesDetalhados);

// Acessando um elemento específico do array multidimensional
console.log(filmesDetalhados[0][1]); // "Neo" do filme "Matrix"

// ---------------------------------------------
// 3. Iterando sobre um Array
// ---------------------------------------------

let numeros = [10, 20, 30, 40];

// Percorrendo o array com um loop "for"
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Utilizando o método "forEach" para iterar sobre o array
numeros.forEach(function(numero) {
    console.log(numero);
});

// ---------------------------------------------
// 4. Métodos de Manipulação de Arrays
// ---------------------------------------------

let frutas = ["Maçã", "Banana"];

// Adicionando um elemento ao final do array com "push()"
frutas.push("Laranja");
console.log(frutas); // ["Maçã", "Banana", "Laranja"]

// Removendo o último elemento do array com "pop()"
frutas.pop();
console.log(frutas); // ["Maçã", "Banana"]

// Encontrando a posição de um elemento com "indexOf()"
console.log(frutas.indexOf("Banana")); // 1

// Copiando parte do array com "slice()"
let novasFrutas = frutas.slice(0, 2);
console.log(novasFrutas); // ["Maçã", "Banana"]

// Removendo e substituindo elementos com "splice()"
frutas.splice(1, 1, "Pêssego");
console.log(frutas); // ["Maçã", "Pêssego"]

// ---------------------------------------------
// 5. Conclusão e Links Úteis
// ---------------------------------------------

console.log("Esses foram alguns dos principais métodos de arrays em JavaScript!");
console.log("Existem muitos outros métodos disponíveis. Pesquise mais e pratique com exercícios.");
console.log("Confira a documentação completa sobre arrays no MDN:");
console.log("https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array");


