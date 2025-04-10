// Template Strings: Interpolando Strings

// Exemplo Antigo: Concatenando com "+"
let nome = "João"; // Declarando a variável nome
let idade = 25;    // Declarando a variável idade

// Criando uma mensagem usando concatenação manual
let mensagem = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(mensagem); // Exibe: Meu nome é João e eu tenho 25 anos.

// Exemplo Moderno: Usando Template Strings
let mensagemNova = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagemNova); // Exibe: Meu nome é João e eu tenho 25 anos.

// Outro Exemplo: Usando ${} com Adição
let a = 10; // Declarando variável a
let b = 20; // Declarando variável b

// Criando uma mensagem que inclui o resultado da soma
let somaMensagem = `A soma de ${a} e ${b} é ${a + b}.`;
console.log(somaMensagem); // Exibe: A soma de 10 e 20 é 30.

// Desestruturação de Objetos e Arrays

// Exemplo Sem Desestruturação
let pessoa = { nome: "João", idade: 25 }; // Objeto com propriedades nome e idade

// Acessando as propriedades manualmente
let nomeSemDesestruturação = pessoa.nome; // Pegando a propriedade "nome" do objeto
let idadeSemDesestruturação = pessoa.idade; // Pegando a propriedade "idade" do objeto

console.log(nomeSemDesestruturação, idadeSemDesestruturação); // Exibe: João 25

// Exemplo Com Desestruturação
let { nome: meuNome, idade: minhaIdade } = pessoa; // Extraindo as propriedades diretamente
console.log(meuNome, minhaIdade); // Exibe: João 25

// Caso a propriedade tenha o mesmo nome da variável, você pode omitir:
let { nome: nomeDireto, idade: idadeDireto } = pessoa; // Desestruturação simples
console.log(nomeDireto, idadeDireto); // Exibe: João 25

// Exemplo Com Desestruturação de Arrays
let numeros = [10, 20, 30]; // Array com três elementos

// Extraindo os valores em variáveis
let [primeiro, segundo, terceiro] = numeros;
console.log(primeiro, segundo, terceiro); // Exibe: 10 20 30

// Operador Spread

// Exemplo Simples: Adicionando Elementos a um Array
let numerosOriginais = [1, 2, 3]; // Array original

// Usando o operador spread para criar um novo array
let novosNumeros = [...numerosOriginais, 4, 5];
console.log(novosNumeros); // Exibe: [1, 2, 3, 4, 5]

// Exemplo Para Concatenar Dois Arrays
let array1 = [1, 2, 3]; // Primeiro array
let array2 = [4, 5, 6]; // Segundo array

// Usando o operador spread para combinar os dois arrays
let combinado = [...array1, ...array2];
console.log(combinado); // Exibe: [1, 2, 3, 4, 5, 6]

// Exemplo Para Clonar um Objeto
let objeto = { nome: "João", idade: 25 }; // Objeto original

// Criando um clone do objeto original
let clone = { ...objeto };
console.log(clone); // Exibe: { nome: 'João', idade: 25 }

// Verificando que é um novo objeto (endereço diferente na memória)
console.log(clone === objeto); // Exibe: false
