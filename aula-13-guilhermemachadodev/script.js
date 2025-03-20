// Aula sobre métodos de array: filter, map e reduce
// Vamos aprender na prática como usar essas ferramentas poderosas!

// 1. Criando um array inicial para trabalhar
const pessoas = [
    { nome: "Eu", idade: 23 },
    { nome: "Lizzy", idade: 19 },
    { nome: "Roberto", idade: 33 },
  ];
  
  // --------------------------- FILTER ---------------------------
  // Objetivo: Filtrar pessoas com mais de 20 anos
  
  // Usando for
  let pessoasMaioresDe20AnosComFor = [];
  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 20) {
      pessoasMaioresDe20AnosComFor.push(pessoas[i]);
    }
  }
  console.log("Com for:", pessoasMaioresDe20AnosComFor);
  
  // Usando filter
  let pessoasMaioresDe20AnosComFilter = pessoas.filter(function (pessoa) {
    return pessoa.idade > 20;
  });
  console.log("Com filter:", pessoasMaioresDe20AnosComFilter);
  
  // Usando Arrow Function
  let pessoasMaioresDe20AnosArrow = pessoas.filter(pessoa => pessoa.idade > 20);
  console.log("Com filter e Arrow Function:", pessoasMaioresDe20AnosArrow);
  
  // --------------------------- MAP ---------------------------
  // Objetivo: Criar um array apenas com os nomes das pessoas
  
  // Usando for
  let nomesComFor = [];
  for (let i = 0; i < pessoas.length; i++) {
    nomesComFor.push(pessoas[i].nome);
  }
  console.log("Nomes com for:", nomesComFor);
  
  // Usando map
  let nomesComMap = pessoas.map(function (pessoa) {
    return pessoa.nome;
  });
  console.log("Nomes com map:", nomesComMap);
  
  // Usando Arrow Function
  let nomesArrow = pessoas.map(pessoa => pessoa.nome);
  console.log("Nomes com map e Arrow Function:", nomesArrow);
  
  // --------------------------- REDUCE ---------------------------
  // Criando um array de ordens para exemplificar o reduce
  const ordens = [
    { produto: "Produto A", quantidade: 50 },
    { produto: "Produto B", quantidade: 30 },
    { produto: "Produto C", quantidade: 73 },
  ];
  
  // Objetivo: Somar as quantidades de todas as ordens
  
  // Usando for
  let totalDeOrdensComFor = 0;
  for (let i = 0; i < ordens.length; i++) {
    totalDeOrdensComFor += ordens[i].quantidade;
  }
  console.log("Total de ordens com for:", totalDeOrdensComFor);
  
  // Usando reduce
  let totalDeOrdensComReduce = ordens.reduce(function (acumulador, ordemAtual) {
    return acumulador + ordemAtual.quantidade;
  }, 0); // Valor inicial é 0
  console.log("Total de ordens com reduce:", totalDeOrdensComReduce);
  
  // Usando Arrow Function
  let totalDeOrdensArrow = ordens.reduce((acumulador, ordemAtual) => acumulador + ordemAtual.quantidade, 0);
  console.log("Total de ordens com reduce e Arrow Function:", totalDeOrdensArrow);
  
  // --------------------------- RESUMO ---------------------------
  console.log("Resumo:");
  console.log("Filter retorna um array filtrado com base em uma condição.");
  console.log("Map transforma os elementos de um array em outro.");
  console.log("Reduce reduz um array a um único valor, acumulando resultados.");
  