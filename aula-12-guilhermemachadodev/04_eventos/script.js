document.getElementById("meuBotao").addEventListener("click", function() {
    document.getElementById("mensagem").textContent = "O botão foi clicado!";
});

document.getElementById("campoTexto").addEventListener("keyup", function(event) {
    document.getElementById("resultado").textContent = "Você digitou: " + event.target.value;
});
