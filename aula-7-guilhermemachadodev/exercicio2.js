// Passo 1: Peça ao usuário para digitar um número
const numero = Number(prompt("Digite um número:"));

// Passo 2: Verifique se o número é par ou ímpar usando o operador %
if (numero % 2 === 0) {
  alert(`O número ${numero} é par.`);
} else {
  alert(`O número ${numero} é ímpar.`);
}
