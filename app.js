'use strict'
import funcionarios from './funcionarios.json' with { type: "json" };

function criarImagem(funcionario) {
    const Func = document.getElementById('Func');

    const container = document.createElement('div');
    const imagem = document.createElement('img');
    const nome = document.createElement('p');
    const cargo = document.createElement('span');


    imagem.src = "./img/" + funcionario.imagem; 
    nome.textContent = funcionario.nome; 
    cargo.textContent = funcionario.cargo; 


    container.appendChild(imagem);
    container.appendChild(nome);
    container.appendChild(cargo);
    Func.appendChild(container);
}

function carregarImagens() {
    funcionarios.forEach(criarImagem); 
}

carregarImagens();
