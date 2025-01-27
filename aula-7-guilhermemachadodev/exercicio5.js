// Passo 1: Crie a função para gerar a tabuada
function gerarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  // Passo 2: Peça ao usuário um número
  const numeroUsuario = Number(prompt("Digite um número para ver a tabuada:"));
  
  // Passo 3: Chame a função com o número informado pelo usuário
  gerarTabuada(numeroUsuario);
  