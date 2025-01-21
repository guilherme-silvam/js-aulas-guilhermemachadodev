// Função sem parâmetro
// Uma função que não recebe valores de entrada.
function mensagemDoDev() {
    alert("Bora codar"); // Exibe uma mensagem de alerta.
}
mensagemDoDev(); // Chama a função.

// Função com parâmetros
// Uma função que recebe dois valores de entrada.
function multiplicacao(numero1, numero2) {
    console.log(numero1 * numero2); // Exibe o resultado da multiplicação no console.
}
multiplicacao(5, 6); // Chama a função passando os valores 5 e 6.

// Função com retorno
// Uma função que retorna o resultado de uma operação.
function multiplicacaoComRetorno(numero1, numero2) {
    return numero1 * numero2; // Retorna o resultado da multiplicação.
}
let resultado = multiplicacaoComRetorno(5, 6); // Armazena o valor retornado.
console.log(resultado); // Exibe o valor de resultado no console.

function soma(numero1, numero2) {
    return numero1 + numero2; // Retorna o resultado da soma.
}
resultado = soma(resultado, 10); // Atualiza o valor de resultado.
console.log(resultado); // Exibe o novo valor de resultado no console.

// Função com valor padrão
// Uma função que usa um valor padrão se nenhum valor for passado.
function mensagemComNomePadrao(nome = "Guilherme") {
    console.log("Seja bem-vindo, " + nome + " ao Blog da aulas"); // Exibe uma mensagem de boas-vindas.
}
mensagemComNomePadrao(); // Chama a função sem passar um argumento, usando o valor padrão.
