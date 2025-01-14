// ----------------------------
// 1. Laços de Repetição
// ----------------------------

// FOR - Repetição controlada por contador
console.log("Exemplo de FOR:");
for (let i = 1; i <= 5; i++) {
  console.log(`Número: ${i}`); // Saída: Número: 1, Número: 2 ... Número: 5
}

// WHILE - Repetição enquanto a condição for verdadeira
console.log("Exemplo de WHILE:");
let contador = 1;
while (contador <= 5) {
  console.log(`Contagem: ${contador}`); // Saída: Contagem: 1 ... Contagem: 5
  contador++;
}

// DO WHILE - Executa pelo menos uma vez antes de verificar a condição
console.log("Exemplo de DO WHILE:");
let numero = 1;
do {
  console.log(`Número atual: ${numero}`); // Saída: Número atual: 1 ... Número atual: 5
  numero++;
} while (numero <= 5);

// ----------------------------
// 2. Condicionais
// ----------------------------

// Estrutura IF
let nomeBlog = "Guilherme Machado DEV";

if (nomeBlog === "Guilherme Machado DEV") {
  console.log("Melhor blog de todos!"); // Saída: Melhor blog de todos!
}

// Estrutura IF/ELSE
let idade = 16;

if (idade >= 18) {
  console.log("Pode dirigir."); 
} else {
  console.log("Só acima de 18 anos pode dirigir."); // Saída: Só acima de 18 anos pode dirigir.
}

// Estrutura ELSE IF
let time = "Vasco";

if (time === "Botafogo") {
  console.log("Seu time ficou em 2° lugar."); 
} else if (time === "Vasco") {
  console.log("Parabéns, seu time foi campeão!"); // Saída: Parabéns, seu time foi campeão!
} else {
  console.log("Seu time não se classificou."); 
}

// Operador Ternário
let maiorDeIdade = idade >= 18 ? "Sim, é maior de idade" : "Não, é menor de idade";
console.log(maiorDeIdade); // Saída: Não, é menor de idade

// Estrutura SWITCH
let dia = 2;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira"); // Saída: Terça-feira
    break;
  default:
    console.log("Outro dia");
}






