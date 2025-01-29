document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.getElementById("amigo");
    const listaNomes = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let nomes = [];

    window.adicionarAmigo = function () {
        const nome = inputNome.value.trim();
        if (nome === "") {
            alert("Por favor, digite um nome válido.");
            return;
        }
        
        nomes.push(nome);
        atualizarLista();
        inputNome.value = "";
    };

    function atualizarLista() {
        listaNomes.innerHTML = "";
        nomes.forEach((nome) => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (nomes.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }
        
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        resultado.innerHTML = `<li>Amigo Secreto: ${nomes[indiceSorteado]}</li>`;
    };
});