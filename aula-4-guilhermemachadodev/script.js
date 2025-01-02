// Começando com algumas variáveis para exemplificar os operadores lógicos e matemáticos

// Variáveis de números
let numeroUm = 21;
let numeroDois = "21"; // Observe que o segundo valor é uma string e o primeiro é um número
let numeroTres = 10;
let numeroQuatro = 5;

// Operadores Lógicos

// Comparação simples (==): Compara apenas os valores, sem levar em conta o tipo
console.log('Comparação == (valor):');
console.log(numeroUm == numeroDois); // true, porque os valores são iguais, apesar dos tipos diferentes (número vs string)

// Comparação estrita (===): Compara valor e tipo
console.log('Comparação === (valor e tipo):');
console.log(numeroUm === numeroDois); // false, porque o valor é igual, mas o tipo é diferente (número vs string)

// Verificando se os valores são diferentes (não idênticos)
console.log('Comparação != (não igual):');
console.log(numeroUm != numeroDois); // false, pois os valores são iguais, mas os tipos são diferentes

// Verificando se os valores são não idênticos, incluindo tipo
console.log('Comparação !== (não idêntico):');
console.log(numeroUm !== numeroDois); // true, porque os tipos são diferentes (número vs string)

// Comparação de maior que (>), menor que (<), maior ou igual (>=) e menor ou igual (<=)
console.log('Comparações com maior que, menor que, maior ou igual, e menor ou igual:');
console.log(numeroUm > numeroTres);  // true, 21 é maior que 10
console.log(numeroTres < numeroQuatro); // false, 10 não é menor que 5
console.log(numeroQuatro >= numeroTres); // false, 5 não é maior ou igual a 10
console.log(numeroTres <= numeroQuatro); // true, 10 é maior que 5

// Operadores Lógicos

// Tabela Verdade - Operador E (&&): Retorna true apenas se todas as condições forem verdadeiras
console.log('Operador && (E):');
console.log(numeroUm === 21 && numeroDois === "21"); // true, ambas as condições são verdadeiras
console.log(numeroUm > 30 && numeroTres === 10); // false, a primeira condição é falsa

// Tabela Verdade - Operador OU (||): Retorna true se pelo menos uma das condições for verdadeira
console.log('Operador || (OU):');
console.log(numeroUm === 21 || numeroTres > 5); // true, a primeira condição é verdadeira
console.log(numeroTres === 15 || numeroQuatro === 5); // true, a segunda condição é verdadeira
console.log(numeroUm < 10 || numeroDois === "22"); // false, ambas as condições são falsas

// Tabela Verdade - Operador NÃO (!): Inverte o valor lógico
console.log('Operador ! (NÃO):');
console.log(!(numeroTres === 10)); // false, a condição é verdadeira, mas o operador ! inverte para falso

// Agora vamos utilizar os operadores matemáticos

// Soma (+)
console.log('Operador de Soma (+):');
console.log(primeiroValor + segundoValor); // 15, a soma dos dois valores

// Subtração (-)
console.log('Operador de Subtração (-):');
console.log(primeiroValor - segundoValor); // 40, a subtração dos dois valores

// Multiplicação (*)
console.log('Operador de Multiplicação (*):');
console.log(primeiroValor * segundoValor); // 40, multiplicação dos dois valores

// Divisão (/)
console.log('Operador de Divisão (/):');
console.log(primeiroValor / segundoValor); // 30, divisão entre os dois valores

// Resto da Divisão (%): Retorna o restante de uma divisão inteira
console.log('Operador de Resto da Divisão (%):');
console.log(primeiroValor % segundoValor); // 2, o resto da divisão de 17 por 3

// Combinação de operadores lógicos e matemáticos

// Verificando se o número é maior que 10 e, ao mesmo tempo, se é par (usando o operador %)
console.log('Combinando lógicos e matemáticos:');
console.log((numeroUm > 10) && (numeroUm % 2 === 0)); // true, 21 é maior que 10 e é par

// Verificando se o número é menor que 10 ou se o resto de uma divisão por 3 é igual a zero
console.log((numeroTres < 10) || (numeroTres % 3 === 0)); // true, 10 é menor que 10 (falso), mas 10 dividido por 3 tem resto 0 (verdadeiro)

// Agora, vamos fazer uma operação mais complexa com operadores lógicos e matemáticos

// Se um número for divisível por 3, 5 e 7, o resultado será true
let numeroVerificar = 105;
console.log('Operação Complexa (Divisível por 3, 5 e 7):');
console.log(numeroVerificar % 3 === 0 && numeroVerificar % 5 === 0 && numeroVerificar % 7 === 0); // true, 105 é divisível por 3, 5 e 7

