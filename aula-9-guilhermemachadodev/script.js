// Aula: Funções Anônimas, Arrow Functions e Higher-Order Functions

// 1. Função tradicional para saudação
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Guilherme"));

// -----------------------------
// 2. Função Anônima
// -----------------------------
const saudacaoAnonima = function(nome) {
    return `Olá, ${nome}!`;
};
console.log(saudacaoAnonima("Guilherme"));

// -----------------------------
// 3. Arrow Functions
// -----------------------------

// Arrow Function com um parâmetro
const dobrar = (num) => {
    return num * 2;
};
console.log(dobrar(5)); // Saída: 10

// Arrow Function com dois parâmetros
const somar = (a, b) => {
    return a + b;
};
console.log(somar(3, 7)); // Saída: 10

// Arrow Function ainda mais reduzida
const triplo = num => num * 3;
console.log(triplo(4)); // Saída: 12

// -----------------------------
// 4. Higher-Order Functions (Funções de Ordem Superior)
// -----------------------------

// Exemplo usando o método map para dobrar os valores de um array
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]

// Criando nossa própria Higher-Order Function
function operacao(numero, funcao) {
    return funcao(numero);
}

// Função que será passada como argumento
const quadrado = num => num * num;
console.log(operacao(4, quadrado)); // Saída: 16

// Higher-Order Function que retorna outra função
function criarMultiplicador(multiplicador) {
    return numero => numero * multiplicador;
}

const dobrarNumero = criarMultiplicador(2);
console.log(dobrarNumero(5)); // Saída: 10

const triplicarNumero = criarMultiplicador(3);
console.log(triplicarNumero(5)); // Saída: 15


