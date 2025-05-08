// Aula sobre Parâmetro Rest

// 1. Função básica usando o Parâmetro Rest
function soma(...numeros) {
    // O Parâmetro Rest (...numeros) coleta todos os argumentos passados à função
    // e os coloca dentro de um array chamado 'numeros'.
    return numeros.reduce((acc, num) => acc + num, 0);
    // A função 'reduce' soma todos os números no array 'numeros'.
    // 'acc' (acumulador) começa em 0 (o segundo argumento do 'reduce').
    // 'num' é o número atual sendo iterado.
}

// Exemplos de chamada da função 'soma'
console.log(soma(1, 2, 3, 4)); // Saída: 10
// Explicação: Os números [1, 2, 3, 4] são somados: 1 + 2 + 3 + 4 = 10.

console.log(soma(10, 20)); // Saída: 30
// Explicação: Os números [10, 20] são somados: 10 + 20 = 30.

console.log(soma()); // Saída: 0
// Explicação: Sem argumentos, o array 'numeros' é vazio, e a soma resulta em 0.


// 2. Função avançada com argumentos fixos e Parâmetro Rest
function detalhes(nome, ...caracteristicas) {
    // 'nome' é um argumento fixo que captura o primeiro valor passado à função.
    // '...caracteristicas' coleta todos os outros argumentos em um array.
    console.log(`O nome é: ${nome}`);
    // Exibe o valor de 'nome' no console.

    console.log('Características:', caracteristicas);
    // Exibe as características restantes (em forma de array).
}

// Exemplos de chamada da função 'detalhes'
detalhes('JavaScript', 'dinâmico', 'versátil', 'popular');
// Saída:
// O nome é: JavaScript
// Características: [ 'dinâmico', 'versátil', 'popular' ]
// Explicação: O argumento 'JavaScript' vai para 'nome', e o restante vai para 'caracteristicas'.

detalhes('HTML');
// Saída:
// O nome é: HTML
// Características: []
// Explicação: Somente o primeiro argumento é fornecido, então o array 'caracteristicas' está vazio.


// 3. Função para concatenar strings usando o Parâmetro Rest
function concatenar(...palavras) {
    // '...palavras' captura todas as strings passadas como argumentos.
    return palavras.join(' ');
    // 'join' combina todas as strings no array 'palavras', separando-as por espaços.
}

// Exemplos de chamada da função 'concatenar'
console.log(concatenar('Olá', 'mundo', 'dos', 'devs!')); // Saída: "Olá mundo dos devs!"
// Explicação: Todas as palavras são combinadas em uma única string.

console.log(concatenar('Bora', 'codar')); // Saída: "Bora codar"
// Explicação: As palavras são combinadas em "Bora codar".

console.log(concatenar()); // Saída: ""
// Explicação: Sem argumentos, o array 'palavras' é vazio, resultando em uma string vazia.

