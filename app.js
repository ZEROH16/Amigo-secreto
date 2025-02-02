let amigos = [];

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

   
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function adicionarAmigo() {
     let entradaAmigos = document.getElementById('amigo').value;

     if (entradaAmigos === "" ){
        alert('Por favor insira um nome!');
        return;

     }

     amigos.push(entradaAmigos);
     console.log('Nome adicionado:', entradaAmigos);
     
     atualizarLista();
     limparCampo();
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não ha amigos suficientes para sortear!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O Amigo sorteado é: ${amigoSorteado}`;
}
