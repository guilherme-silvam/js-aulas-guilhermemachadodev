// Escopo em JavaScript

// 1. Escopo Global
var nome = "Guilherme"; // Declarado no escopo global
var idade = 21; // Declarado no escopo global

function saudacao() {
    console.log("Olá, " + nome + "! Você tem " + idade + " anos.");
}

saudacao(); // Acessa a variável nome e idade do escopo global
console.log(nome); // Acessa a variável nome do escopo global
console.log(idade); // Acessa a variável idade do escopo global


// 2. Escopo de Função
function exemploEscopoDeFuncao() {
    var mensagem = "Oi, Guilherme!";
    console.log(mensagem); // Acessa a variável 'mensagem' dentro da função
}

exemploEscopoDeFuncao(); // Oi, Guilherme!
console.log(mensagem); // Erro: 'mensagem' não está definida fora da função


// 3. Escopo de Bloco
if (true) {
    let cidade = "Vix"; // Declarado dentro de um bloco
    console.log(cidade); // Vix
}
console.log(cidade); // Erro: 'cidade' não está definida fora do bloco


// 4. Escopo de Bloco Autônomo
{
    let linguagem = "JavaScript"; // Criando um bloco autônomo
    console.log(linguagem); // JavaScript
}
console.log(linguagem); // Erro: 'linguagem' não está definida fora do bloco autônomo


// Hoisting em JavaScript

// Hoisting com 'var'
console.log(nomeHoisting); // undefined (Hoisting: var é elevado, mas valor é atribuído após)
var nomeHoisting = "Maria";
console.log(nomeHoisting); // Maria


// Hoisting com 'let' - Erro
console.log(idadeHoisting); // Erro: Cannot access 'idadeHoisting' before initialization
let idadeHoisting = 30; // Declaração e atribuição com let


// Hoisting com 'const' - Erro
console.log(paisHoisting); // Erro: Cannot access 'paisHoisting' before initialization
const paisHoisting = "Brasil"; // Declaração e atribuição com const


// Diferenças entre 'var', 'let' e 'const' no Hoisting
console.log("Exemplo de Hoisting:");
console.log(nome); // undefined (devido ao hoisting com var)
var nome = "João";

console.log(idade); // Erro: Cannot access 'idade' before initialization
let idade = 25;

console.log(pais); // Erro: Cannot access 'pais' before initialization
const pais = "Brasil";

