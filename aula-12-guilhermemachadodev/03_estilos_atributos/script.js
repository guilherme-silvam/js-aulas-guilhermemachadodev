document.getElementById("mudarCor").addEventListener("click", function() {
    let texto = document.getElementById("meuTexto");
    texto.style.color = "blue"; 
    texto.style.fontWeight = "bold";
});

document.getElementById("trocarImagem").addEventListener("click", function() {
    let imagem = document.getElementById("minhaImagem");
    imagem.setAttribute("src", "imagem2.jpg"); 
    imagem.setAttribute("alt", "Nova imagem carregada!");
});
