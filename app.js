let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value; 

    if (nome == "") {
        alert("Por favor insira um nome");
    }
    else{
        amigos.push(nome);
        input.value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    let indiceAmigo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAmigo];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`; // Exibe o nome sorteado
}