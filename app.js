//jogo do amigo secreto
let amigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();
  
    if (nome === '') {
        // Exibe o alerta caso o campo esteja vazio
        alert('Por favor, insira um nome válido.');
        return;
    }

    amigos.push(nome);
    inputNome.value = '';
    mostrarNomesDosAmigos(); // Atualiza a lista sempre que um novo amigo é adicionado
}

function mostrarNomesDosAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    let conteudo = '';

    for (let i = 0; i < amigos.length; i++) {
        conteudo += "<li><strong>" + amigos[i] + "</strong></li>";
    }

    listaAmigos.innerHTML = conteudo;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `O amigo secreto é: ${amigoSorteado}`;
}

