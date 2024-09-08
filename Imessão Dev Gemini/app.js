// Selecionando os elementos do DOM
const buscaInput = document.querySelector('input[name="busca"]');
const resultadosDiv = document.querySelector('.resultados-pesquisa');

// Função para criar um elemento HTML para cada personagem
function criarElementoPersonagem(personagem) {
    const div = document.createElement('div');
    div.classList.add('item-resultado');

    div.innerHTML = `
        <div class="informacoes">
            <h2>${personagem.titulo}</h2>
            <p class="descricao-meta">${personagem.descricao}</p>
            <a href="${personagem.link}" target="_blank">Mais informações</a>
        </div>
        <div class="imagem">
            <img src="${personagem.imagem}" alt="Retrato de ${personagem.titulo}" width="200" height="200">
        </div>
    `;

    return div;
}

// Função para renderizar todos os personagens na página
function renderizarPersonagens(personagens) {
    resultadosDiv.innerHTML = ''; // Limpar os resultados anteriores

    personagens.forEach(personagem => {
        resultadosDiv.appendChild(criarElementoPersonagem(personagem));
    });
}

// Função para filtrar os personagens com base na busca
function filtrarPersonagens(textoBusca) {
    const termosBusca = textoBusca.toLowerCase().split(' ');
    const personagensFiltrados = dados.filter(personagem => {
        return termosBusca.every(termo => {
            return personagem.titulo.toLowerCase().includes(termo) ||
                personagem.descricao.toLowerCase().includes(termo);
        });
    });

    // Renderiza apenas o primeiro resultado (se existir)
    if (personagensFiltrados.length > 0) {
        renderizarPersonagens(personagensFiltrados);
    } else {
        // Exibe uma mensagem caso não seja encontrado nenhum resultado
        resultadosDiv.innerHTML = '<p class="sem-resultados">A entidade de Conhecimento não encontrou nenhum personagem.</p>';
    }
}

// Função para embaralhar um array
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i],
        array[j]] = [array[j], array[i]];
    }
}

//aletoriza a ordem dos personagens
embaralharArray(dados);
//apresenta os personagens
renderizarPersonagens(dados);

// Adicionar um event listener ao campo de busca
buscaInput.addEventListener('input', () => {
    const textoBusca = buscaInput.value;
    filtrarPersonagens(textoBusca);
});

// funcionalidade do botão X na barra de pesquisa

const limparBusca = document.querySelector('.limpar-busca');

limparBusca.addEventListener('click', () => {
    buscaInput.value = '';
});

const botaoOcultar = document.getElementById('ocultar-elementos');
const elementosAEsconder = document.querySelectorAll('h1, input, .btn-pesquisa, .resultados-pesquisa');
const mensagem = document.getElementById('mensagem');
let elementosOcultos = false;

botaoOcultar.addEventListener('click', () => {
  elementosOcultos = !elementosOcultos;

  elementosAEsconder.forEach(elemento => {
    elemento.classList.toggle('oculto');
  });

  mensagem.classList.toggle('oculto');

  botaoOcultar.textContent = elementosOcultos ? 'Mostrar Elementos' : 'Mostrar Apenas o Wallpaper';
});