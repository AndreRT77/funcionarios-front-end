'use strict'
import funcionarios from './funcionarios.json' with { type: "json" };

function criarImagem(funcionario) {
    const galeria = document.getElementById('galeria');

    const container = document.createElement('div');
    const imagem = document.createElement('img');
    const legenda = document.createElement('span');

    imagem.src = "./img/" + funcionario.imagem; 
    legenda.textContent = funcionario.nome; 

    container.appendChild(imagem);
    container.appendChild(legenda);
    galeria.appendChild(container);
}

function carregarImagens() {
    funcionarios.forEach(criarImagem); 
}

carregarImagens();
