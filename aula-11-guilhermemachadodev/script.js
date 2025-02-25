// Criando um objeto simples
let pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor"
};

// Acessando propriedades
console.log(pessoa.nome); // Notação de ponto
console.log(pessoa["idade"]); // Notação de colchetes

// Adicionando propriedades
pessoa.altura = 1.75;
console.log(pessoa);

// Removendo propriedades
delete pessoa.profissao;
console.log(pessoa);

// Criando um objeto com métodos
let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2021,
    ligar: function() {
        console.log("O carro está ligado.");
    }
};

carro.ligar();

// Demonstrando o uso do 'this'
let usuario = {
    nome: "Pedro",
    saudar: function() {
        console.log(`Olá, ${this.nome}!`);
    }
};
usuario.saudar();

// Exemplo de array de objetos
let produtos = [
    { nome: "Celular", preco: 1500 },
    { nome: "Notebook", preco: 3000 }
];

console.log(produtos[1].nome); // Acessando dados dentro do array de objetos
