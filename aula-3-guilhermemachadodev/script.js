// Aula 3: Variáveis e Tipos Primitivos

// Variáveis
// São usadas para armazenar valores que podemos reutilizar no código.
// No JavaScript, podemos criar variáveis de três formas: var, const e let.

// Exemplo de declaração e atribuição
var nomeBlog = "Guilherme Machado DEV"; // Variável global
const conteudoBlog = "JavaScript"; // Valor constante, não pode ser alterado
let emailBlog = "contato@guilhermemachadodev.com"; // Variável que pode mudar dentro de seu escopo

// Escopo
// Escopo é o contexto onde uma variável pode ser acessada.
// - Escopo global: Variáveis acessíveis em qualquer parte do código.
// - Escopo de função: Variáveis disponíveis apenas dentro de uma função.
// - Escopo de bloco: Variáveis definidas com let ou const só existem dentro do bloco {} onde foram criadas.

// Exemplo de escopo
function exemploEscopo() {
  var variavelFuncao = "Dentro da função"; // Escopo de função
  if (true) {
    let variavelBloco = "Dentro do bloco"; // Escopo de bloco
    console.log(variavelBloco); // Funciona aqui
  }
  // console.log(variavelBloco); // Erro: variável não existe fora do bloco
}
exemploEscopo();

// Armazenando o valor do usuário
// Usamos o prompt para perguntar ao usuário e armazenar sua resposta em uma variável.
let retornoUsuario = prompt("Qual sua linguagem favorita?");
console.log(retornoUsuario); // Exibe no console o que o usuário digitou

// Tipos Primitivos
// O JavaScript possui 6 tipos primitivos: string, number, boolean, null, undefined e symbol.

// 1. String: Representa texto.
let nome = "Guilherme";
console.log(nome); // Saída: Guilherme

// 2. Number: Representa números (inteiros, decimais ou negativos).
let idade = 21;
let preco = 19.99;
console.log(idade, preco); // Saída: 21 19.99

// 3. Boolean: Representa valores lógicos (true ou false).
let usuarioVerificado = true;
console.log(usuarioVerificado); // Saída: true

// 4. Null: Representa a ausência intencional de valor.
let pessoa = null;
console.log(pessoa); // Saída: null

// 5. Undefined: Representa uma variável que foi declarada, mas não recebeu valor.
let telefone;
console.log(telefone); // Saída: undefined

// 6. Symbol: Cria identificadores únicos (menos comum em projetos iniciais).
let simbolo = Symbol("id");
console.log(simbolo); // Saída: Symbol(id)

// Boas práticas ao criar variáveis
// - Use nomes descritivos que indiquem o propósito da variável.
let precoProduto = 50.0;

// - Evite usar letras ou números aleatórios, como "x" ou "a1".
// - Não use espaços, acentos ou caracteres especiais (ex.: "nome do usuário").
// - Lembre-se que JavaScript diferencia letras maiúsculas e minúsculas.
let NomeExemplo = "João";
let nomeexemplo = "Maria";
console.log(NomeExemplo, nomeexemplo); // São variáveis diferentes

// Use camelCase para variáveis compostas.
let nomeCompleto = "Guilherme Machado";

console.log("Aula finalizada! Bora codar!");

