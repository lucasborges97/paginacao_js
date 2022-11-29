let pessoas = [];
let form = document.querySelector('#form');
let paginacao = document.querySelector('#paginacao');
let perPage = 2;

//Evento para coletar o click no formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let nome = e.target.nome.value;

    if(!nome) {
        alert('Por favor digite o nome de uma pessoa');
    }
    else {
        pessoas.push(nome);
        form.reset();
        e.target.nome.focus();
        criaElementoLista(nome);
    }

    
});


//Função para criar os elementos na lista
function criaElementoLista(nome) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = nome;
    paginacao.appendChild(div);
}

//Logica aplicada para a paginação
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(pessoas.length / perPage)
}

//nao estou conseguindo acessar o pessoas.length fora do scopo






