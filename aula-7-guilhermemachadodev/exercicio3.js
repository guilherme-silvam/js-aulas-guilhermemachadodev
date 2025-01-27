// Passo 1: Obtenha a hora atual
const horaAtual = new Date().getHours();

// Passo 2: Verifique a hora e apresente a mensagem correspondente
if (horaAtual < 12) {
  alert("Bom dia!");
} else if (horaAtual < 18) {
  alert("Boa tarde!");
} else {
  alert("Boa noite!");
}
