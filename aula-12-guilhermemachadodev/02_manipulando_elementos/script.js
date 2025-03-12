document.getElementById("addComment").addEventListener("click", function() {
    let novoComentario = document.createElement("p");
    novoComentario.textContent = "Novo comentário adicionado!";
    document.getElementById("comments").appendChild(novoComentario);
});
